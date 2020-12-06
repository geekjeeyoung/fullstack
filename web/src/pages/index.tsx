import { NavBar } from "../components/NavBar";
import { createUrqlClient } from "../utils/createUrqlClient";
import { withUrqlClient } from "next-urql";

const Index = () => (
  <>
    <NavBar />
    <div>hello, this is jeeyoung !</div>
  </>
);

export default withUrqlClient(createUrqlClient)(Index);
