"use client";

import React, { useRef, useState } from "react";
import Loader from "@/app/(mypages)/loading/loader";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import Landing from "@/app/(mypages)/landing/Landing";
gsap.registerPlugin(useGSAP, SplitText);

const Heroloader = () => {
  const countRef = useRef(null);
  const loaderRef = useRef(null);
  const topRef = useRef(null);
  const topTagRef = useRef(null);
  const scrollRef = useRef(null);
  const hrRef = useRef(null);
  const yearRef = useRef(null);
  const [completed, setCompleted] = useState(false);

  useGSAP(() => {
    const topSplit = SplitText.create(topRef.current, {
      type: "chars",
      mask: "chars",
      charsClass: "char++",
    });
    const tagSplit = SplitText.create(topTagRef.current, {
      type: "words",
      mask: "words",
      wordsClass: "word",
    });
    const scrollSplit = SplitText.create(scrollRef.current, {
      type: "chars",
      mask: "chars",
      wordsClass: "char",
    });
    const yearSplit = SplitText.create(yearRef.current, {
      type: "chars",
      mask: "chars",
      wordsClass: "char",
    });
    document.body.style.overflow = "hidden";

    const shuffle = (elementRef, finalText, duration, subnumber, callback) => {
      let i = 0;
      const shuffleInterval = setInterval(() => {
        if (i < duration) {
          elementRef.current.innerHTML = Math.random()
            .toString(36)
            .substring(2, subnumber);
          i++;
        } else {
          clearInterval(shuffleInterval);
          elementRef.current.innerText = finalText;
          if (callback) callback();
        }
      }, 100);
    };

    const removeLetters = () => {
      let text = countRef.current.innerText;
      const removeInterval = setInterval(() => {
        if (text.length > 0) {
          text = text.substring(0, text.length - 1);
          countRef.current.innerText = text;
        } else {
          clearInterval(removeInterval);
          fadeOutLoader();
        }
      }, 100);
    };

    gsap.set(topSplit.chars, {
      yPercent: 100,
    });

    gsap.set(tagSplit.words, {
      yPercent: -100,
    });

    gsap.set(scrollSplit.chars, {
      yPercent: -100,
    });

    gsap.set(hrRef.current, {
      scaleX: 0,
    });

    gsap.set(yearSplit.chars, {
      yPercent: 100,
    });

    const animateTop = () => {
      const tl = gsap.timeline();

      tl.to(
        topSplit.chars,
        {
          yPercent: 0,
          duration: 1,
          ease: "power2.Out",
          stagger: 0.1,
        },
        0
      )
        .to(
          tagSplit.words,
          {
            yPercent: 0,
            duration: 1,
            ease: "power2.Out",
            stagger: 0.1,
          },
          0
        )
        .to(
          scrollSplit.chars,
          {
            yPercent: 0,
            duration: 1,
            ease: "power2.Out",
            stagger: 0.1,
          },
          0
        )
        .to(
          hrRef.current,
          {
            scaleX: 1,
            duration: 1,
            transformOrigin: "left",
          },
          0
        )
        .to(
          yearSplit.chars,
          {
            yPercent: 0,
            duration: 1,
            ease: "power2.Out",
            stagger: 0.1,
          },
          0
        );
    };

    const fadeOutLoader = () => {
      gsap.to(loaderRef.current, {
        opacity: 0,
        pointerEvents: "none",
        duration: 1,
        ease: "none",
        onComplete: () => {
          animateTop();
          document.body.style.overflow = "";
          setCompleted(true);
        },
      });
    };

    gsap.to(countRef.current, {
      innerHTML: 100 + "%",
      duration: 3,
      snap: "innerHTML",
      ease: "none",
      onComplete: () => {
        setTimeout(
          () =>
            shuffle(countRef, "n0te/25", 20, 8, () => {
              setTimeout(() => removeLetters(), 1000);
            }),
          500
        );
      },
    });

    return () => {
      document.body.style.overflow = "";
    };
  });

  return (
    <>
      <Loader ref={loaderRef} countRef={countRef} />
      <Landing
        topRef={topRef}
        topTagRef={topTagRef}
        scrollRef={scrollRef}
        hrRef={hrRef}
        completed={completed}
        yearRef={yearRef}
      />
    </>
  );
};
export default Heroloader;
