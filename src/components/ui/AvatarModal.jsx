export default function AvatarModal() {
  return (
    <div className="2xl:flex 2xl:justify-between 2xl:items-center 2xl:gap-[1.5rem] 2xl:w-[38.5rem] 2xl:min-h-[13.4375rem] 2xl:rounded-[0.5rem] 2xl:p-[1rem] 2xl:bg-utiliBlue">
    <span className="2xl:w-[5rem] 2xl:min-h-[11.4375rem] 2xl:self-start">
        <img
            src="./images/vectorIcon.png"
            alt="person's image"
            className="2xl:w-[5rem] 2xl:min-h-[5.4375rem]"
        />
    </span>
    <span className="2xl:w-[30rem] 2xl:min-h-[8.75rem] 2xl:font-medium 2xl:leading-[1.75rem] 2xl:font-lato 2xl:text-white">
        <p>
            &quot; As a lifelong resident of Bloomington and a small
            business owner, I started my own fence company to support
            our growing family and it has been a very rewarding
            experience for me. We treat every project as if it was our
            own, ensuring that each fence not only meets, but exceeds
            our customers’ expectations. &quot;
        </p>
        <p className="2xl:w-[11.5625rem] 2xl:min-h-[1.1875rem] 2xl:font-medium leading-[1.2rem] 2xl:font-lato 2xl:pt-2">Nicholas Rachuna, Owner</p>
    </span>
</div>
  )
}
