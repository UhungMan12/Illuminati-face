import Image from "next/image";

const testimonials = [
  [
    {
      content:
        "저희 어머니 옛날 사진이 젊어졌어요.",
      link: "https://gall.dcinside.com/mgallery/board/view/?id=talkon&no=3946&page=1",
      author: {
        name: "누누",
        role: "토크온 정신병자",
        image: "/g.jpg",
      },
    },
    {
      content:
        "학교에 헬기가 추락하는 꿈을 꿧어요.",
      link: "https://gall.dcinside.com/mgallery/board/view/?id=talkon&no=3946&page=1",
      author: {
        name: "테싱",
        role: "토크온 광명회",
        image: "/malte.jpg",
      },
    },
  ],
  [
    {
      content:
        "죽은 아빠 영정사진을 돈안내고 편집했어요",
      link: "https://gall.dcinside.com/mgallery/board/view/?id=talkon&no=3946&page=1",
      author: {
        name: "응가",
        role: "토크온 한부모",
        image: "/fawaz.jpg",
      },
    },
    {
      content:
        "우흥.",
      link: "https://gall.dcinside.com/mgallery/board/view/?id=talkon&no=3946&page=1",
      author: {
        name: "오리너구리",
        role: "토크온 광명회",
        image: "/sergei.jpg",
      },
    },
  ],
  [
    {
      content:
        "앵무새 튀겨먹었습니다.",
      link: "https://gall.dcinside.com/mgallery/board/view/?id=talkon&no=3946&page=1",
      author: {
        name: "레드불",
        role: "토크온 광명회",
        image: "/himanil.jpg",
      },
    },
    {
      content:
        "주여",
      link: "https://gall.dcinside.com/mgallery/board/view/?id=talkon&no=3946&page=1",
      author: {
        name: "제우스",
        role: "토크온 사이비",
        image: "/rod.jpg",
      },
    },
  ],
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="py-10"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto md:text-center">
          <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold tracking-normal text-slate-900 sm:text-6xl">
            즐겨요
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-slate-700 leading-7">
          200,000명 이상의 행복한 토크온 유저가 사용중.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-16 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li
                    key={testimonialIndex}
                    className="hover:scale-105 transition duration-300 ease-in-out"
                  >
                    <a href={testimonial.link} target="_blank" rel="noreferrer">
                      <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                        <blockquote className="relative">
                          <p className="text-lg tracking-tight text-slate-900">
                            "{testimonial.content}"
                          </p>
                        </blockquote>
                        <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                          <div>
                            <div className="font-display text-base text-slate-900">
                              {testimonial.author.name}
                            </div>
                            <div className="mt-1 text-sm text-slate-500">
                              {testimonial.author.role}
                            </div>
                          </div>
                          <div className="overflow-hidden rounded-full bg-slate-50">
                            <Image
                              className="h-14 w-14 object-cover"
                              src={testimonial.author.image}
                              alt="picture of the testimonial author"
                              width={56}
                              height={56}
                            />
                          </div>
                        </figcaption>
                      </figure>
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
