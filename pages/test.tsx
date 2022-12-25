import Image from "next/image"
import Link from "next/link"
import React from "react"
import DesktopMac from "../components/desktopMac/DesktopMac"
import FeedItem from "../components/FeedItem"
import IphoneScreen from "../components/iphoneScreen/IphoneScreen"
import MenuBarMac from "../components/menuBarMac/MenuBarMac"

const posts = [
  {
    slug: "iiisiss",
    featuredImage:
      "https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "ok",
  },
  {
    slug: "iiisiss",
    featuredImage:
      "https://images.pexels.com/photos/1563256/pexels-photo-1563256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "ok",
  },
  {
    slug: "iiisiss",
    featuredImage:
      "https://images.pexels.com/photos/1563256/pexels-photo-1563256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "ok",
  },
  {
    slug: "iiisiss",
    featuredImage:
      "https://images.pexels.com/photos/1563256/pexels-photo-1563256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "ok",
  },
  {
    slug: "iiisiss",
    featuredImage:
      "https://images.pexels.com/photos/1563256/pexels-photo-1563256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "ok",
  },
  {
    slug: "iiisiss",
    featuredImage:
      "https://images.pexels.com/photos/1563256/pexels-photo-1563256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "ok",
  },
  {
    slug: "iiisiss",
    featuredImage:
      "https://images.pexels.com/photos/1563256/pexels-photo-1563256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "ok",
  },
  {
    slug: "iiisiss",
    featuredImage:
      "https://images.pexels.com/photos/1563256/pexels-photo-1563256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "ok",
  },
  {
    slug: "iiisiss",
    featuredImage:
      "https://images.unsplash.com/photo-1661961112835-ca6f5811d2af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "ok",
  },
  {
    slug: "iiisiss",
    featuredImage:
      "https://images.pexels.com/photos/1563256/pexels-photo-1563256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "ok",
  },
  {
    slug: "iiisiss",
    featuredImage:
      "https://images.pexels.com/photos/1563256/pexels-photo-1563256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "ok",
  },
]

function test() {
  return (
    <div className="flex justify-center mx-auto w-screen h-screen  overflow-hidden">
      <IphoneScreen />
    </div>
  )
}

export default test

export const getServerSideProps = async ({ req, params }: any) => {
  var myHeaders = new Headers()
  myHeaders.append(
    "Authorization",
    "Bearer ku70DKDNpk-lNPfWHb7XbhHmfXCohzf7cWaYGdIMcoZv-imJAoihYqMS7-MpqFqn"
  )

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  }

  const response = await fetch(
    "https://plausible.io/api/v1/stats/breakdown?site_id=mansour-mahamat.dev&period=30d&property=visit:country&metrics=visitors,pageviews,bounce_rate,visit_duration,visits,events",
    //@ts-ignore

    requestOptions
  )

  const userTwitterInfos = await response.json()

  console.log(userTwitterInfos)
  return {
    props: {},
  }
}
