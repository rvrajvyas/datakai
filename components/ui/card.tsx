"use client";
import { cn } from "@/lib/utils";

export function CardDemo() {
  return (
    (<div className="max-w-xs w-full">
      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          //"bg-[url(https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)] bg-cover",
          "bg-[url('/images/pexels-nemuel-6424589.jpg')] bg-cover",
          // Preload hover image by setting it in a pseudo-element
          "before:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
          "hover:bg-[url(https://media.giphy.com/media/8dYmJ6Buo3lYY/giphy.gif?cid=790b7611xq9mpwyke3rhzxao5444552hq8dox78dvc54ebdv&ep=v1_gifs_search&rid=giphy.gif&ct=g)]",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500"
        )}>
        <div className="text relative z-50">
          <h1 className="font-bold text-xl md:text-3xl text-gray-50 ">
          LMS Portal
          </h1>
          <p className="font-normal text-base text-gray-50 relative my-4">
            

Advanced learning management system designed for modern education and corporate training needs.
          </p>
        </div>
      </div>
    </div>)
  );
}


export function CardDemo1() {
  return (
    (<div className="max-w-xs w-full">
      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "bg-[url('/images/pexels-cottonbro-4009626.jpg')] bg-cover",
          // "bg-[url(https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)] bg-cover",
          // Preload hover image by setting it in a pseudo-element
          "before:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
          "hover:bg-[url(https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWF1bjZ0aXJqcGF3eW9nbzY2bWtjM2kyZGZucmNpcmdjazNwMWlkdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2BxVviTuqfV0sJhPuI/giphy.gif)]",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500"
        )}>
        <div className="text relative z-50">
          <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
          Gaming Innovations
          </h1>
          <p className="font-normal text-base text-gray-50 relative my-4">
          
          Immersive gaming experiences that push the boundaries of technology and storytelling..
          </p>
        </div>
      </div>
    </div>)
  );
}


export function CardDemo2() {
  return (
    (<div className="max-w-xs w-full">
      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          //"bg-[images/1125x2436-pastel-red-solid-color-background.jpg] bg-cover",
          "bg-[url('/images/pexels-curtis-nguyen-482858871-16004754.jpg')] bg-cover",
          // Preload hover image by setting it in a pseudo-element
          "before:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
          "hover:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)]",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500"
        )}>
        <div className="text relative z-50">
          <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
            AI Influencers
          </h1>
          <p className="font-normal text-base text-gray-50 relative my-4">
          Next-generation virtual personalities powered by advanced AI, 
          creating authentic connections and engaging content.
          </p>
        </div>
      </div>
    </div>)
  );
}
