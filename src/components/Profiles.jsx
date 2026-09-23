import { useState, useEffect, useRef } from "react";
import { useSwipeable } from "react-swipeable";
import Image1 from "../assets/Pictures/Profiles/36c26ce03f10621f66250c07e7b7c6d2.jpg";
import Image2 from "../assets/Pictures/Profiles/NagumoYoichi.jpg";
import Image3 from '../assets/Pictures/Profiles/gokublack2.jpg'
import Image4 from '../assets/Pictures/Profiles/𝐕𝐞𝐠𝐞𝐭𝐭𝐨 𝐌𝐚𝐧𝐠𝐚 𝐈𝐜𝐨𝐧.jpg'
import Image5 from '../assets/Pictures/Profiles/𝙂𝙤𝙜𝙚𝙩𝙖.jpg'
import Image6 from '../assets/Pictures/Profiles/Vegeta Icon.jpg'
import Image7 from '../assets/Pictures/Profiles/gohan.jpg'
import Image8 from '../assets/Pictures/Profiles/BlackStar! (8).jpg'
import Image9 from '../assets/Pictures/Profiles/2ecb863d056db3e1f9363ca581089cd6.jpg'
import Image10 from '../assets/Pictures/Profiles/𝙂𝙪𝙩𝙨.jpg'
import Image11 from '../assets/Pictures/Profiles/download (3).jpg'
import Image12 from '../assets/Pictures/Profiles/touma.jpg'
import Image13 from '../assets/Pictures/Profiles/WhatsApp Image 2026-03-24 at 3.06.57 PM (1).jpeg'
import Image14 from '../assets/Pictures/Profiles/WhatsApp Image 2026-03-24 at 2.39.47 PM (1).jpeg'
import Loc from "../assets/Pictures/Profiles/location.png";
import gsap from "gsap";

export default function Profiles() {
  const profiles = [
    {
      type: "start"
    },
    {
      type: "profile",
      img: Image1,
      name: "Helpy",
      age: 17,
      location: "Turkey",
      bio: "Bio",
      desc: "He's just so incredibly goated , VERY loyal and mature guy. If I'm being honest and without ANY glaze, he's the nicest guy i know and and it's not close. Handsome dude , 6'2, respectful and as athletic as they come. Slightly rich but that doesn't matter right? I'm not a girl but if i was i'd let him hit for sure.",
      dc: "._instinct._"
    },
    {
      type: "profile",
      img: Image2,
      name: "Akari",
      age: 19,
      location: "London",
      bio: "Bio",
      desc: "Akari is actually a prince AND a feminist, he's insanely rich, handsome aswell as humble. i can assure you that you've NEVER met a funnier guy in your life. Not only that but he's known around his kingdom as the perfect man, every woman dreams of getting with him because of how much of a gentleman he is.",
      dc: "akariwym"
    },
    {
      type: "profile",
      img: Image3,
      name: "Rose",
      age: 20,
      location: "Mexico",
      bio: "Bio",
      desc: "Well i mean where do i even start? He's a pedophile , zoophile and a necrophile. As if that wasn't bad enough he's a 5'6 border hooper , and a tequila slurper who is thinking about transitioning into a femboy. He's EXTREMELY slow and not someone you would want to hang out with , did i mention he molests kids in his spare time?",
      dc: "0mp."
    },
    {
      type: "profile",
      img: Image4,
      name: "Flying",
      age: 16,
      location: "not sure",
      bio: "Bio",
      desc: "INSANELY chill , very laid back kinda guy. Flying is the type of guy every girl dreams about if i'm being honest. He's funny , loyal and very respectful aswell. As perfect as all this might sound , i really can't yap about how amazingly charming he is because it'd take too long. Just hit him up for yourself and you'll see i'm right.",
      dc: "._flying_."
    },
    {
      type: "profile",
      img: Image5,
      name: "Snax",
      age: 15,
      location: "Croatia or sum",
      bio: "Bio",
      desc: "Also a VERY slow dude and while this guy isn't a weirdo , he is quite retarded nonetheless. Jokes aside he's actually pretty chill and VERY loyal. Truth be told he's a really nice guy but he does get attached really easily, if you're the same way i HIGHLY suggest you text him. ",
      dc: "snaxlegend"
    },
    {
      type: "profile",
      img: Image11,
      name: "Saint",
      age: 16,
      location: "Morocco",
      bio: "Bio",
      desc: "Saint really is a blessing to be around , I mean he's funny , mature and hella chill. If you've been looking for someone that's kind and matches your energy really well, then look no further. He's handsome and quite shredded too, and if that wasn't enough he's actually talked to almost not a single woman in his life because he's waiting for the right one. still very experienced somehow.",
      dc: "staker_ur"
    },
    {
      type: "profile",
      img: Image6,
      name: "Mo",
      age: 20,
      location: "London",
      bio: "Bio",
      desc: "Now mo is a very special occasion , he's a smart fella but yeah you guessed it , he's a pedophile but at least he's chill (somewhat jokingly). Now should you hit him up? well he's black and he most certainly will try to emotionally manipulate you until you let him hit , after he hits he'll just dip. Did i mention that he won't give you any affection? cuz it's true.",
      dc: "mol_aden"
    },
    {
      type: "profile",
      img: Image7,
      name: "et bomb",
      age: 16,
      location: "No idea",
      bio: "Bio",
      desc: "Bomb is 6'1 , wealthy and quite the gentleman. Unlike most creatures you've seen so far, this guy isn't nice or kind or anything like that. He is fun to be around tho , well as long as you aren't a jew or black. He's VERY straightforward and funny as fuck too. It gets a bit too crazy when you're around him but if you love some drama then he's for you.",
      dc: "et_bomb3"
    },
    {
      type: "profile",
      img: Image8,
      name: "Delta",
      age: 17,
      location: "Somewhere",
      bio: "Bio",
      desc: "Delta is also a pretty special occasion , he's.. i mean he's definitely something, just not sure what. I mean he's slow as FUCK but he's a really nice guy at least?? well apart from when he's spammming the hard R. If you're a little retarded yourself then i suggest you hit him up. Otherwise just skip him.",
      dc: "p8qzoo"
    },
    {
      type: "profile",
      img: Image13,
      name: "Ermo",
      age: 18,
      location: "Kurdistan",
      bio: "Bio",
      desc: "Yeahh he's kurdish so of course you'd think he's a dirty sewers rat and well you woudn't be wrong if you thought that. He's a complete disgrace to his family and his loved ones. On top of all that he's a pedophile and his parents are actually siblings, doesn't get much worse honestly. And no i'm not joking about any of that.",
      dc: "sucking_on_a_lolipop"
    },
     {
      type: "profile",
      img: Image9,
      name: "Void",
      age: 15,
      location: "Mars",
      bio: "Bio",
      desc: "Void is the kinda guy to cyberbully people just because he can. He's really straightforward and kinda chill aswell. If you want someone that says and does wild shit in a day to day basis for no reason then he might be the one for you. Nothing really special about him... he's lwk just filler for the profiles cuz i ran out of people to add.",
      dc: "iluv.zachary"
    },
    {
      type: "profile",
      img: Image12,
      name: "Touma",
      age: 16,
      location: "Venus",
      bio: "Bio",
      desc: "Don't get it twisted , touma is a grown ass dude but that's the profile picture he gets because he wants to get pegged all the time. You're probably wondering why i even added him in the first place and well that's simple , if you're a black girl and well i guess a dominant one then he's for you cuz none of these other dudes like black girls.",
      dc: "toumahh"
    },
    {
      type: "profile",
      img: Image14,
      name: "Johan",
      age: 16,
      location: "???",
      bio: "Bio",
      desc: "Don't get the wrong idea off of his name because he's actually a really chill guy whose passion is helping women out. He loves doing research on how to get rid of periods and overall make women's lives much easier. He volunteers at a pet shelter in his spare time and advocates for women's rights.",
      dc: "dr.dingleberry67"
    },
    {
      type: "profile",
      img: Image10,
      name: "Toast",
      age: 17,
      location: "Germany??",
      bio: "Bio",
      desc: "Toast is also a very chill guy and overall a vibe to be around , He's a very nice and respectful guy too. I really can't think of any red flags or even minor inconviences BUT if you don't like anime/manga then just don't even bother adding him. Now he does have a gf... but he is looking for a side chick so yk.",
      dc: ".izleepy"
    },
    {
      type: "ending",
    },
  ];

  const [index, setIndex] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () =>
      setIndex((i) => Math.min(i + 1, profiles.length - 1)),
    onSwipedRight: () =>
      setIndex((i) => Math.max(i - 1, 0)),
    trackMouse: true,
    preventScrollOnSwipe: false,
  });

  useEffect(() => {
    if (profiles[index].type === "profile") {
      gsap.fromTo(
        ".profile-container",
        { y: 40, opacity: 0, },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
      );
    }
  }, [index]);

  useEffect(() => {
    if (profiles[index].type === "ending") {
      gsap.fromTo(
        ".ending-container",
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 2, ease: "power2.out", }
      );
    }
  }, [index]);

  useEffect(() => {
    if (profiles[index].type === "ending" || "start") {
      gsap.fromTo(
        ".ending-sec-p",
        { opacity: 0 },
        { opacity: 1, duration: 2, ease: "power2.out", stagger: 0.4 }
      );
    }
  }, [index]);

  /*useEffect(() => {
    if (profiles[index].type === "profile") {
      gsap.fromTo(
        ".profile-stagger",
        { opacity: 0 },
        { opacity: 1, duration: 1.6, ease: "power2.out", stagger: 0.2 }
      );
    }
  }, [index]); */

  return (
    <div
      {...handlers} className="w-full min-h-screen overflow-hidden"
    >
      <div className="w-full h-full overflow-y-auto">
      {profiles[index].type === "profile" && (
        <ProfileCard profile={profiles[index]} />
      )}

      {profiles[index].type === "ending" && <Ending />}
      {profiles[index].type === "start" && <Starting />}
      </div>
    </div>
  );
}

const OpenForm = () => {
  window.location.href =
    "https://docs.google.com/forms/d/1R3bw1JiZD_gIFO9rgDZKfgWQ-ANsKru_dTY8Yq3aLQE/edit";
};

function ProfileCard({ profile }) {

   const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(profile.dc);
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  }

  const boxRef = useRef();
  const roseRef = useRef(null);

  return (
    <div ref={boxRef} className="profile-container border-2 border-gray-700 rounded-sm min-h-dvh text-white pl-2 shadow-2xl flex flex-col gap-5 items-start pb-10 pr-14">
      <section className="profile-img flex justify-center items-center pt-4">
        <img
          src={profile.img}
          alt={profile.name}
          className="profile-stagger img-prof w-50 border-3 border-white rounded-4xl xs:w-65 md:w-80 mb-5"
        />
      </section>

      <section className="relative w-full desc-container flex gap-10 flex-col items-start">
        <h2 className="profile-stagger nameage-prof text-[1.2rem] xs:text-[1.8rem] md:text-[1.8rem] font-bold inline-block border-b text-gray-200">
          {profile.name}, {profile.age}
        </h2>

        <section className="flex items-center">
          <img className="profile-stagger img2-prof w-7 md:w-10 invert" src={Loc} alt="" />
          <p className="profile-stagger location-prof text-gray-200 text-[1.1rem] border-b ml-2 md:text-2xl">
            {profile.location}
          </p>
          
        </section>

        <p className="profile-stagger bio-prof mt-3 text-[1.2rem] xs:text-[1.5rem] md:text-[1.9rem] border-b inline-block">
          {profile.bio}
        </p>

        <p className="profile-stagger desc-prof text-gray-200 mt-2 text-[0.9rem] xs:text-[1.2rem]
         md:text-[1.5rem]">
          {profile.desc}
        </p>

        <section className="flex w-full justify-between px-4 items-start">
          
          <div className="flex flex-col items-start">
            <button
              onClick={handleCopy}
              className="profile-stagger btn border-b w-23 text-[1.1rem] pb-1 md:text-[1.4rem]"
            >
              {copied ? "Copied" : "Text him"}
            </button>

            {copied && (
              <span className="text-sm text-purple-600 mt-2">
                Discord username copied
              </span>
            )}
          </div>

          {/* Survey */}
          <button
            onClick={OpenForm}
            className="profile-stagger btn border-b w-23 text-[1.1rem] pb-1 md:text-[1.4rem]"
          >
            Survey
          </button>
        </section>
      </section>
    </div>
  );
}

function Ending() {
  return (
    <div className="ending-container w-full h-screen bg-black text-white flex flex-col justify-center items-center text-center px-8">
      <h2 className="ending-sec-p text-4xl font-bold mb-4">That’s everyone.</h2>

      <section className="flex flex-col">
        <p className="ending-sec-p text-[1.1rem] opacity-70">
          Not because you ran out of people
        </p>
        <p className="ending-sec-p text-[1.1rem] opacity-70">
          but because at some point
        </p>
        <p className="ending-sec-p text-[1.1rem] opacity-70 mb-8">
          you’re supposed to stop looking.
        </p>
      </section>

      <button
        onClick={() => window.location.href = "/profiles"}
        className="ending-sec-p start-over-btn border px-6 py-2 rounded-xl font-medium"
      >
        Start over
      </button>
    </div>
  );
}

function Starting() {
  return (
    <div className="ending-container w-full h-screen bg-black text-white flex flex-col justify-center items-center text-center px-6">
      <h2 className="ending-sec-p text-gray-400 text-2xl md:text-4xl font-bold mb-4">Just a quick word before you start !!</h2>
      <section className="flex flex-col justify-center items-center gap-2 max-w-2xl">
        <p className="ending-sec-p text-sm md:text-lg mx-2">
          The profiles you are about to see are quite.. let's say, unique.
          Now if you couldn't tell, this is supposed to be kind of like a tinder website, but just the temu version.
          Belive it or not you are almost GUARANTEED to find the love of your life here, well unless you're black or jewish, then you might have a bit of a hard time. If not then you're chillin.
          Now of course if you have any ideas about how i could improve the website then of course you can lmk.
          With that said you can start swiping right through the profiles.
          Have fun. or not. Up to you.
        </p>
      </section>
    </div>
  );
}