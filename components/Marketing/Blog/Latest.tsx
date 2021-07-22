import classnames from "classnames";

const posts = [
  {
    title:
      "Introducing Pickup Philly, an open-source business directory built on the Jamstack",
    href: "#",
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
    image:
      "https://cdn.getshifter.co/caa65008efb706a8bfc6f7e4045d6a018420c3df/uploads/2020/12/using-bogo-with-headless-featured-300x183.png",
    author: {
      name: "Dan Olson",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "How to use search engine optimization to drive sales",
    href: "#",
    image:
      "https://cdn.getshifter.co/caa65008efb706a8bfc6f7e4045d6a018420c3df/uploads/2021/04/pay-as-you-go-featuredimage-300x183.png",
    description:
      "Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.",
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
    author: {
      name: "Jason McClintock",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title:
      "Explaining the Difference Between Shifter Static and Shifter Headless",
    href: "#",
    category: {
      name: "Case Study",
      href: "#",
      color: "bg-green-100 text-green-800",
    },
    description:
      "Upgrade your business with a purpose-built form and Shifter Static integration",
    date: "Feb 12, 2020",

    image:
      "https://cdn.getshifter.co/caa65008efb706a8bfc6f7e4045d6a018420c3df/uploads/2021/03/blogimage_usecase_MHIblog-image-300x183.png",
    datetime: "2020-02-12",
    author: {
      name: "Shusei Toda",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title:
      "Upgrade your business with a purpose-built form and Shifter Static integration",
    href: "#",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab iure iusto fugiat commodi sequi.",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    image:
      "https://cdn.getshifter.co/caa65008efb706a8bfc6f7e4045d6a018420c3df/uploads/2021/03/スクリーンショット-2021-03-22-11.28.26-300x183.png",
    author: {
      name: "Easer Collins",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

export const BlogLatest = () => {
  return (
    <div className='max-w-7xl mx-auto py-16 px-4 sm:pt-24 sm:px-6 lg:px-8'>
      <div className='relative container mx-auto lg:max-w-7xl'>
        <div className='text-center'>
          <h2 className='text-size-8 font-bold text-gray-800'>
            Read the latest
          </h2>
          <p className='mt-4 text-size-6 text-gray-600 sm:mt-4'>
            Get the news on product updates, events, and the industry.
          </p>
        </div>
        <div className='lg:grid grid-flow-col grid-cols-3 grid-rows-3 gap-6 pt-16'>
          {posts.map((post, i) => (
            <div
              key={post.title}
              className={classnames(
                i === 3
                  ? "flex lg:grid grid-rows-2 row-span-3"
                  : "grid col-span-2 grid-cols-4",
              )}>
              <div className={classnames("relative", i === 3 ? "row-span-1 col-span-4" : "col-span-1")}>
                <img className='w-full h-auto' alt='' src={post.image} />
              </div>
              <div className={classnames("col-span-3", i === 3 ? "pt-6" : "pl-6")}>
                <a href={post.href} className='block'>
                  <p className='text-size-6 font-bold text-gray-600'>
                    {post.title}
                  </p>
                </a>
                <div className='mt-2'>
                  <div className='text-size-4 text-gray-500'>
                    <a href={post.author.href}>
                      <span className='text-gray-700'>{post.author.name}</span>
                    </a>{" "}
                    | <time dateTime={post.datetime}>{post.date}</time>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
