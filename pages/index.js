import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HeroComponent from "../components/HomePageComponents/HeroComponent"
import BestSellingProducts from "../components/HomePageComponents/BestSellingProducts"
import ProductCard from '../components/shared/ProductCard'
import SEOLayout from "../components/shared/SEOLayout";
import { topProductsData } from '../components/HomePageComponents/bestSellingData'


export default function Home() {
  const data = {
    id: 0,
    name: `Orange drink powder packaging machine`,
    price: `300,000`,
    category: `Packaging Machine`,
    img: `/img/products/04.jpeg`
  }
  return (
    <>
      <SEOLayout />

      <main>
        <HeroComponent />
        <BestSellingProducts />
        <section className="py-5">
          <div className="container">
            <h2 className="font-bold h3 mb-5 text-center "><span className="text-gray"></span>Best Selling Products</h2>
            <div className="row d-font justify-content-around">
            {topProductsData.map(item => <ProductCard col="3" data={item} key={item.id} /> )}
            </div>
          </div>
        </section>
      </main>


    </>
  )
}
