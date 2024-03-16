import photo1 from "../assets/issue-1.jpg";

export const CodeIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="mr-1 inline-block h-6 w-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
      />
    </svg>
  );
};
export const Likeicon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="mr-1 inline-block h-6 w-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
      />
    </svg>
  );
};
export const HappyIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="mr-1 inline-block h-6 w-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
      />
    </svg>
  );
};

export const UserProfile = () => {
  return (
    <div className=" flex w-[36rem] gap-x-4 rounded-lg bg-white p-12">
      <img
        src={photo1}
        alt="Want some water guy ?"
        className="w-32 self-start rounded-full border-[11px] border-[#E6EFFA]"
      />
      <div className="space-y-7 text-[#1C2B62]">
        <div className="font-merienda">
          <h1 className=" text-3xl font-bold">Hi guy</h1>
          <h2 className="mt-1">Frontend Developer</h2>
        </div>

        <div className="space-y-4">
          <p className="flex items-center">
            <CodeIcon />
            Learning React and Tailwind
          </p>
          <p className="flex items-center">
            <Likeicon />
            Try to be better
          </p>
          <p className="flex items-center">
            <HappyIcon />
            Good luck have fun
          </p>
        </div>

        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae,
          facere! Dolor iure laudantium minima consequatur minus repellat
          perferendis dicta aut veritatis asperiores sequi, voluptatem quaerat
          quod? Id, fugiat? Quod, temporibus.
        </div>
        <button className="rounded-md border-2 border-[#C4CADF] p-2">
          Show more
        </button>
      </div>
    </div>
  );
};
