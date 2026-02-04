import {toast} from "sonner";
import {useMutation} from "@tanstack/react-query";

export default function Button() {


    const mutation = useMutation({

        mutationFn: data => {
            return fetch("https://api.learnjavascript.online/demo/react/grades", {
                method: "POST",
                body: JSON.stringify({
                      grade: 15
                    }
                )}).then( response => {
                    if (!response.ok) {
                        throw new Error()
                    }

                    return response.json()
            })
        },
        onMutate: customFn => {
            return (
                toast.loading("Loading", { id: 'fetched-data'})
            )
        },
        onSuccess: data => {

            console.log(data.message)

            return (
                    toast.success("Success!", { id: 'fetched-data'})
            )

        },
        onError: error => {

            return (
            toast.error("Something went wrong!", { id: 'fetched-data'})
            )
        },
    });


    return (
        <div className="flex h-screen items-center justify-center">
        <button onClick={() => mutation.mutate()} disabled={mutation.isPending} className="bg-linear-to-r
        from-indigo-600 to-purple-600 text-white
        px-10 py-5 rounded-xl shadow-xl
        hover:shadow-2xl transition-all duration-300 hover:scale-105 text-3xl font-semibold tracking-wide "> {mutation.isPending ? "Sending..." : "Buy now!"} </button>
        </div>
    )
}