import Image from "next/image"
import Link from "next/link"
import React from "react"

function FeedItem({ post, index }: any) {
  return (
    <Link href={`/post/${post.slug}`}>
      <div className="cursor-pointer py-6 px-1 inline-block w-full group">
        <figure
          className={`relative h-64 ${
            index % 2 == 0 ? "md:h-96" : "md:h-64"
          } w-full hidden md:block mb-3 sm:mb-0 mr-6 border border-gray-100 overflow-hidden rounded-lg transform group-hover:translate-x-0 group-hover:shadow group-hover:translate-y-0 transition duration-700 ease-out overflow-hidden`}
        >
          <div className="absolute w-full h-full object-cover rounded-lg transform group-hover:scale-105 transition duration-700 ease-out cursor-pointer">
            <Image
              alt=""
              className="rounded-lg contrast-115"
              fill
              src={post.featuredImage}
            />
          </div>
        </figure>

        <h4 className="text-black-1 font-semibold text-lg leading-normal mt-2">
          <Link href={`/post/${post.slug}`}>{post.slugtitle}</Link>
        </h4>
        <div className="mt-3">dsfghjk</div>
      </div>
    </Link>
  )
}

export default FeedItem
