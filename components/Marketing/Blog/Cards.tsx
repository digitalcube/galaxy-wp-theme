const posts = [
  {
    title: "Boost your conversion rate",
    href: "#",
    category: { name: "Article", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    imageUrl:
      "https://cdn.getshifter.co/caa65008efb706a8bfc6f7e4045d6a018420c3df/uploads/2020/11/6blog-image-Host-Test-1-300x183.png",
    readingTime: "6 min",
    author: {
      name: "Roel Aufderehar",
      href: "#",
      imageUrl:
        "https://cdn.getshifter.co/caa65008efb706a8bfc6f7e4045d6a018420c3df/uploads/2021/04/pay-as-you-go-featuredimage-300x183.png",
    },
  },
  {
    title: "How to use search engine optimization to drive sales",
    href: "#",
    category: { name: "Video", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.",
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
    imageUrl:
      "https://cdn.getshifter.co/caa65008efb706a8bfc6f7e4045d6a018420c3df/uploads/2021/04/pay-as-you-go-featuredimage-300x183.png",
    readingTime: "4 min",
    author: {
      name: "Brenna Goyette",
      href: "#",
      imageUrl:
        "https://cdn.getshifter.co/caa65008efb706a8bfc6f7e4045d6a018420c3df/uploads/2021/04/pay-as-you-go-featuredimage-300x183.png",
    },
  },
  {
    title: "Improve your customer experience",
    href: "#",
    category: { name: "Case Study", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    imageUrl:
      "https://cdn.getshifter.co/caa65008efb706a8bfc6f7e4045d6a018420c3df/uploads/2021/03/blogimage_usecase_MHIblog-image-300x183.png",
    readingTime: "11 min",
    author: {
      name: "Daniela Metz",
      href: "#",
      imageUrl:
        "https://cdn.getshifter.co/caa65008efb706a8bfc6f7e4045d6a018420c3df/uploads/2020/11/6blog-image-Host-Test-1-300x183.png",
    },
  },
];

export const Cards = () => {
  return (
    <div className='relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8'>
      <div className='absolute inset-0'>
        <div className='bg-white h-1/3 sm:h-2/3' />
      </div>
      <div className='relative max-w-7xl mx-auto'>
        <div className='text-center'>
          <h2 className='text-size-9 font-bold text-purple-primary sm:text-size-9'>
            From the blog
          </h2>
          <p className='mt-3 max-w-2xl mx-auto text-size-6 text-purple-800 sm:mt-4'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
            libero labore natus atque, ducimus sed.
          </p>
        </div>
        <div className='mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none'>
          {posts.map((post) => (
            <div
              key={post.title}
              className='flex flex-col rounded-lg shadow-lg overflow-hidden'>
              <div className='flex-shrink-0'>
                <img
                  className='h-48 w-full object-cover'
                  src={post.imageUrl}
                  alt=''
                />
              </div>
              <div className='flex-1 bg-white p-6 flex flex-col justify-between'>
                <div className='flex-1'>
                  <p className='text-sm font-bold text-purple-800'>
                    <a href={post.category.href} className='hover:underline'>
                      {post.category.name}
                    </a>
                  </p>
                  <a href={post.href} className='block mt-2'>
                    <p className='text-size-6 font-bold text-purple-primary'>
                      {post.title}
                    </p>
                    <p className='mt-3 text-size-5 text-purple-800'>
                      {post.description}
                    </p>
                  </a>
                </div>
                <div className='mt-6 flex items-center'>
                  <div className='flex-shrink-0'>
                    <a href={post.author.href}>
                      <span className='sr-only'>{post.author.name}</span>
                      <img
                        className='h-10 w-10 rounded-full'
                        src={post.author.imageUrl}
                        alt=''
                      />
                    </a>
                  </div>
                  <div className='ml-3'>
                    <p className='text-sm font-bold text-purple-800'>
                      <a href={post.author.href} className='hover:underline'>
                        {post.author.name}
                      </a>
                    </p>
                    <div className='flex space-x-1 text-sm text-gray-500'>
                      <time dateTime={post.datetime}>{post.date}</time>
                      <span aria-hidden='true'>&middot;</span>
                      <span>{post.readingTime} read</span>
                    </div>
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
