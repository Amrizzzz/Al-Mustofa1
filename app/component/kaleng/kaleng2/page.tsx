import Link from "next/link";
import Header from "../../header";

export default function Kaleng1() {
  return (
    <>
      <div className="bg-red-400 text-center" style={{position: "relative", background: "pink"}}>
        <Header/>
          <div
            className="z-index-999 bg-red-400"
           
            style={{position: "relative", display: "inline-block", background: "pink"}}
          >
            <img
              src="/kaleng/Leci.png"
              width="290px"
              height="290px"
              alt=""
              style={{position: "relative", zIndex: 1}}
              data-aos="flip-right" data-aos-duration="800"
            />
            <h1 style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", margin: 0, zIndex: 0, fontWeight:700, fontSize:600}}
             data-aos="fade-right"
             data-aos-duration="1400"
            >
              Leci
            </h1>
          </div>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className="flex justify-between px-18">
          <div>
            <Link href="/component/kaleng/kaleng">
              <div>Before</div>
            </Link>
          </div>

          &nbsp;

          <div>
            <Link href="./kaleng/sarang">
              <div>Next</div>
            </Link>
          </div>
        </div>
    </>
  );
}
