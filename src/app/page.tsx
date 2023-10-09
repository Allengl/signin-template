import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1 className='text-xxl'>Home</h1>
      <Link className={buttonVariants()}  href='/admin'>Open My Admin</Link>
    </div>
  )
}
export default Home;
