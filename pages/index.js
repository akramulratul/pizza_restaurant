import axios from "axios";
import Head from "next/head";
import { Inter } from "@next/font/google";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Featured from "../component/Featured";
import PizzaList from "../component/PizzaList";
import { useState } from "react";
import Add from "../component/Add";
import AddButton from "../component/AddButton";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ pizzaList, admin }) {
  const [close, setClose] = useState(true);
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant in Bogura</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      {admin && <AddButton setClose={setClose} />}
      <PizzaList pizzaList={pizzaList} />
      {!close && <Add setClose={setClose} />}
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      pizzaList: res.data,
      admin,
    },
  };
};

// const res = await axios.get("http://localhost:3000/api/products");
// return {
//   props: {
//     pizzaList: res.data,
//     admin,
//   },
// };
//};
