import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";


const useFollow = () => {
    const queryClient = useQueryClient();

    const {mutate: follow, isPending} = useMutation({
        mutationFn: async(userId) => {
            try {
                const res = await fetch(`api/users/follow/${userId}`, {
                    method: "POST",
                })
    
                const data = await res.json();
    
                if(!res.ok){
                    throw new Error(data.error || "Something went wrong");
                }
    
                return data;
            } 
            catch (error) {
                throw new Error(error);
            }
        },
        onSuccess:() => {
            Promise.all([
                //when we click on follow to follow someone from right panel, that id will be rwmoved from the page
                queryClient.invalidateQueries({queryKey: ["suggestedUsers"]}),
                //when we follow a profile from their profile page, then follow buttton should turn into unfollow button
                queryClient.invalidateQueries({queryKey: ["authUser"]}),
            ])
        },
        onError: (error) => {
            toast.error(error.message);
        }
    })

    return { follow, isPending };
}

export default useFollow;