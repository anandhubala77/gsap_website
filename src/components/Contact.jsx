import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";
import "../../public/style.css";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} className="object-cover w-full h-full" />
  </div>
);

const Contact = () => {
  useGSAP(() => {
    gsap.from(".contact-img", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });

    gsap.from(".contact-form", {
      opacity: 0,
      y: 50,
      delay: 0.5,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <section id="contact" className="relative w-screen px-10 my-20 min-h-96">
      <div className="relative py-24 rounded-lg sm:overflow-hidden bg-[var(--color-blue-200)] text-[var(--color-blue-75)]">
        {/* Left decorative images */}
        <div className="absolute top-0 hidden h-full overflow-hidden contact-img -left-20 w-72 sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src="/img/contact-1.webp"
            clipClass="[clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%)]"
          />
          <ImageClipBox
            src="/img/contact-2.webp"
            clipClass="[clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%)] lg:translate-y-40 translate-y-60"
          />
        </div>

        {/* Right decorative images */}
        
        <div className="absolute contact-img -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src="/img/swordman-partial.webp"
            clipClass="absolute md:scale-125"
          />
          <ImageClipBox
            src="/img/swordman.webp"
            clipClass="[clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%)] md:scale-125"
          />
        </div>

        {/* Contact Form Section */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <p className="mb-5 general text-[10px] uppercase">Join Zentry</p>

          <AnimatedTitle
            title="let&#39;s b<b>u</b>ild the <br /> new era of <br /> g<b>a</b>ming t<b>o</b>gether."
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />

          <form className="contact-form mt-10 space-y-4 w-full max-w-md text-[var(--color-blue-200)]">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-[var(--color-blue-100)] text-[var(--color-blue-200)] placeholder-[var(--color-blue-200)] focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-[var(--color-blue-100)] text-[var(--color-blue-200)] placeholder-[var(--color-blue-200)] focus:outline-none"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-lg bg-[var(--color-blue-100)] text-[var(--color-blue-200)] placeholder-[var(--color-blue-200)] focus:outline-none"
            ></textarea>
            <Button
              title="Send Message"
              containerClass="mt-4 yellow-300-bg text-[var(--color-blue-200)]"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
