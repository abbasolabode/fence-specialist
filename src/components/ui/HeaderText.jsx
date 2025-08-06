/* eslint-disable react/prop-types */
export default function HeaderText({ about, contactHeader, ourWork }) {
    return (
        <section className="w-full min-h-[7.25rem]">
            <div className="w-full bg-[#a31700] mt-[5rem] flex items-center">
                <div className="w-full max-w-[1920px] mx-auto flex items-center justify-center pt-7 px-4 sm:px-6 lg:px-8">
                    <h1 className="font-poppins text-white min-h-[7.25rem] font-semibold text-center
                        text-2xl       // 24px - base
                        xs:text-3xl    // 30px - ~400px
                        sm:text-4xl    // 36px - ~640px
                        md:text-5xl    // 48px - ~768px
                        lg:text-6xl    // 60px - ~1024px
                        xl:text-6xl    // 72px - ~1280px
                        2xl:text-6xl   // 96px - ~1536px
                    ">
                        {about && about} {contactHeader && contactHeader} {ourWork && ourWork}
                    </h1>
                </div>
            </div>
        </section>
    );
}