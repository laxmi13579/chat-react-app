import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function Sinup(){
    const usernameRef = useRef<HTMLInputElement>(null)
    const nameRef = useRef<HTMLInputElement>(null)
    const imageUrlRef = useRef<HTMLInputElement>(null)

    return <>
        <div className="text-3xl font-boldmb-8 text-center">Sinup</div>
        <form className="grid grid-cols-[auto,1fr] gap-x-3 gap-y-5 item-cdnter justify-item-end">
            <label htmlFor="userName">Username</label>
            <Input id="userName" pattern="\S*" required ref={usernameRef}/>
            <label htmlFor="name">Name</label> 
            <Input id="name"required ref={nameRef}/>
            <label htmlFor="imageUrl">Image Url</label>
            <Input id="imageUrl" type="url" ref={imageUrlRef}/>
            <Button type="submit" className="col-span-full">Sinup</Button>
        </form>
    </>
}