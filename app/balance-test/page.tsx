import Link from "next/link";

const CHECKS = [
  {
    id: 1,
    title: "Standing Balance Check",
    image: "/images/check1.jpeg",
    instruction: "Stand with your feet hip-width apart. Hold this position for a moment and notice how your body feels.",
    notices: [
      "Do you feel steady?",
      "Do your feet or legs sway?",
      "Do you need to hold on for support?",
    ],
  },
  {
    id: 2,
    title: "Narrow Stance Check",
    image: "/images/check2.jpeg",
    instruction: "Bring your feet closer together so they are touching or nearly touching.",
    notices: [
      "Does your body sway more?",
      "Can you stay steady for a short moment?",
      "Do you need to widen your stance again?",
    ],
  },
  {
    id: 3,
    title: "Single-Leg Awareness Check",
    image: "/images/check3.jpeg",
    instruction: "Hold on lightly to a counter or chair. Lift one foot a few inches off the ground.",
    notices: [
      "How steady does the standing leg feel?",
      "Do your hips or upper body shift?",
      "Do you need to put your foot down quickly?",
    ],
  },
  {
    id: 4,
    title: "Step and Pause Check",
    image: "/images/check4.jpeg",
    instruction: "Take one slow step forward and pause before taking the next step.",
    notices: [
      "Can you pause without wobbling?",
      "Does your body feel controlled?",
      "Do you need to hold on for support?",
    ],
  },
  {
    id: 5,
    title: "Turning Awareness Check",
    image: "/images/check5.jpeg",
    instruction: "Hold on lightly to a counter. Turn your body slowly to look over one shoulder, then the other.",
    notices: [
      "Do you feel steady during the turn?",
      "Does your balance shift unexpectedly?",
      "Do you need to move your feet to stay stable?",
    ],
  },
];

export default function BalanceTestPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* HERO */}
      <section className="bg-[#f0effe] py-32 px-6 text-center flex flex-col items-center justify-center min-h-[400px]">
        <p className="text-sm font-semibold tracking-widest text-[#534AB7] uppercase mb-4">
          Balance Self-Check
        </p>
        <h1 className="text-4xl md:text-5xl font-semibold text-[#26215C] mb-5 leading-tight">
          A Simple Way to Understand Your Balance
        </h1>
        <p className="text-lg text-[#534AB7] max-w-xl mx-auto leading-relaxed">
          These quick checks help you notice how steady you feel today — no equipment needed, no medical training required.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16 space-y-12">

        {/* DISCLAIMER */}
        <div className="bg-yellow-50 border border-yellow-300 rounded-2xl p-5 flex gap-4 items-start">
          <span className="text-yellow-500 text-xl mt-0.5">⚠️</span>
          <p className="text-sm text-yellow-800 leading-relaxed">
            This page is for general awareness only. Anyone with concerns about dizziness, unsteadiness, or recent falls should speak with a healthcare professional.
          </p>
        </div>

        {/* BEFORE YOU BEGIN */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-5">
            Before You Begin
          </h2>
          <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6">
            <ul className="space-y-4">
              {[
                "Stand near a countertop, wall, or sturdy chair for support",
                "Wear comfortable, supportive shoes",
                "Make sure the floor is clear and well-lit",
                "Stop immediately if you feel unsafe or uncomfortable",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-600 text-base leading-relaxed">
                  <span className="text-[#6C5CE7] font-bold mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 5 CHECKS */}
        <div>
          <p className="text-xs font-semibold tracking-widest uppercase text-[#6C5CE7] mb-6">
            The 5 Self-Checks
          </p>
          <div className="space-y-8">
            {CHECKS.map((check, index) => {
              const isReversed = index % 2 !== 0;
              return (
                <div key={check.id} className={`flex flex-col md:flex-row items-center gap-8 ${isReversed ? "md:flex-row-reverse" : ""}`}>

                  {/* Image */}
                  <div className="w-full md:w-2/5 flex-shrink-0">
                    <img
                      src={check.image}
                      alt={check.title}
                      className="w-full h-80 object-cover object-top rounded-2xl"
                    />
                  </div>

                  {/* Content */}
                  <div className="w-full md:w-3/5 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-[#EEEDFE] flex items-center justify-center text-[#534AB7] font-semibold text-base flex-shrink-0">
                        {check.id}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {check.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-base leading-relaxed mb-5 pl-14">
                      {check.instruction}
                    </p>
                    <div className="pl-14">
                      <p className="text-xs font-semibold tracking-widest uppercase text-[#6C5CE7] mb-3">
                        Notice:
                      </p>
                      <ul className="space-y-2">
                        {check.notices.map((notice) => (
                          <li key={notice} className="flex items-start gap-3 text-gray-600 text-base leading-relaxed">
                            <span className="text-[#6C5CE7] text-lg leading-none mt-0.5">·</span>
                            {notice}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* WHAT THESE CHECKS TELL YOU */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-5">
            What These Checks Tell You
          </h2>
          <div className="bg-[#f0effe] rounded-2xl p-6">
            <p className="text-[#534AB7] text-base leading-relaxed mb-5">
              These simple movements help you notice how steady you feel during everyday tasks and whether balance training could help you move with more confidence. If any of these checks feel difficult, unsteady, or surprising, it may be a sign that balance training could help.
            </p>
            <ul className="space-y-3">
              {[
                "How steady you feel during everyday tasks",
                "Whether you rely on support more than expected",
                "If certain positions feel more challenging",
                "How your balance responds to small changes",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#534AB7] text-base leading-relaxed">
                  <span className="text-[#6C5CE7] font-bold mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* HOW BALNZ CAN HELP */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-5">
            How BALNZ Can Help
          </h2>
          <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6">
            <p className="text-gray-600 text-base leading-relaxed mb-5">
              BALNZ offers science-based programs that blend physical therapy, neuroscience, Tai Chi principles, and yoga-inspired control. Small steps can lead to meaningful improvements in daily life. Training focuses on:
            </p>
            <ul className="space-y-3">
              {[
                "Improving stability and reducing fall risk",
                "Strengthening key muscles for balance",
                "Enhancing coordination and safe movement",
                "Building confidence in daily activities",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-600 text-base leading-relaxed">
                  <span className="text-[#6C5CE7] font-bold mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
<div className="flex flex-wrap gap-4 pt-4">
  <Link href="/programs" className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-medium hover:opacity-90 transition-opacity">
    Explore Programs
  </Link>
  <Link href="/contact" className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-medium hover:opacity-90 transition-opacity">
    Contact BALNZ
  </Link>
</div>

      </section>
    </main>
  );
}