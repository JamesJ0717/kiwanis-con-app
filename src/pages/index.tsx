import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>NY DCON 2022</title>
        <meta name="description" content="NY DCON 2022 Schedule and Program" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container space-y-4">
        <p className="text-2xl">Convention Information:</p>
        <ul className="space-y-2">
          <li className="tall">
            <span>The convention will be at the </span>
            <span className="font-semibold">
              <a className="underline" href="http://maps.apple.com/?daddr=125+E.+Main+St.,+Rocherster+NY">
                Hyatt Regency Hotel, 125 E. Main St., Rochester
              </a>
            </span>
            .
          </li>
          <li className="tall">
            You <span className="font-extrabold">must</span> be registered to attend any District functions and to
            receive conference rates.
          </li>
          <li className="font-medium"> Registration fees increase July 25.</li>

          <li className="tall">
            <span>View a video </span>
            <a
              className="underline"
              href="https://www.youtube.com/watch?v=WCXGjzubEkg"
              target="_blank"
              rel="noreferrer"
            >
              to learn more about Rochester.
            </a>
          </li>

          <li className="tall">
            <span>If you are undecided about making the trip, view a </span>
            <a className="underline" href="https://youtu.be/jsdQ-7PNKeo" target="_blank" rel="noreferrer">
              video message
            </a>
            <span> from Gov. Jim on why you should attend.</span>
          </li>
        </ul>

        <p className="text-2xl">Convention Registration:</p>
        <blockquote>
          <p>
            <a className="underline" href="https://kiwanis-ny.org/dc2022/reg1.htm" target="_blank" rel="noreferrer">
              Registration
            </a>
            <span> (payment options given at end)</span>
          </p>
          <p>
            Some{" "}
            <a className="underline" href="https://kiwanis-ny.org/dc2022/faq.htm" target="_blank" rel="noreferrer">
              Frequently Asked Questions
            </a>{" "}
            are available if you have questions about this process.
          </p>
        </blockquote>

        <p className="text-2xl">Convention Honorees:</p>
        <blockquote>
          <p>
            The 2022 Convention Honorees are Kiwanis International President Peter Mancuso and First Lady Karen Mancuso.
            They will be honored for their work this year leading Kiwanis International and for their service
            representing the New York District to the Kiwanis world.
          </p>
          <p>
            <a
              className="underline"
              href="https://www.kiwanis.org/about/leadership/meet-the-kiwanis-international-board/peter-j-mancuso"
              target="_blank"
              rel="noreferrer"
            >
              More information
            </a>{" "}
            on Peter Mancuso and his Kiwanis career is available on the Kiwanis International web site.
          </p>
        </blockquote>

        <p className="text-2xl">Convention Journal:</p>
        <blockquote>
          <p>
            The Convention Journal gives clubs, divisions and individuals the opportunity to honor someone for their
            efforts during the Kiwanis Year. You can{" "}
            <a
              className="underline"
              href="https://kiwanis-ny.org/2122/journaladform.pdf"
              target="_blank"
              rel="noreferrer"
            >
              download the journal ad form
            </a>{" "}
            (the deadline is July 31)
          </p>
        </blockquote>

        <p className="text-2xl">Hotel Registration:</p>
        <blockquote>
          <p>Registration for the hotel is online:</p>
          <p>
            <a
              className="underline"
              href="https://www.hyatt.com/en-US/group-booking/ROCHE/G-KIWA?src=envision_email_grpreserv_ENG_20220414_GroupBooking_TC000000170A000010937ENG_G-_183591"
              target="_blank"
              rel="noreferrer"
            >
              Hotel Reservation Link
            </a>
          </p>
        </blockquote>

        <p className="text-2xl">Delegate Registration:</p>
        <blockquote>
          <p>
            Each club is entitled to three delegates at the convention. Forms designating a club&apos;s delegates have
            been sent to club secretaries and presidents and must be submitted no later than Aug. 1.
          </p>
        </blockquote>

        <p className="text-2xl">Golf Outing:</p>
        <blockquote>
          <p>
            A Golf Outing will take place on Thursday, Aug. 18, at the{" "}
            <a className="underline" href="http://maps.apple.com/?daddr=1850+Five+Mile+Line+Road+Penfield+NY">
              Shadow Lake Golf Club, 1850 Five Mile Line Road
            </a>{" "}
            in Penfield.
          </p>
          <p>
            <a className="underline" href="https://kiwanis-ny.org/dc2022/golf.htm" target="_blank" rel="noreferrer">
              More information
            </a>{" "}
            is available.
          </p>
        </blockquote>

        <p className="text-2xl">Basket Raffle:</p>
        <blockquote>
          <p>
            Once again, we are having a Basket Raffle at the District Convention. This year we will be featuring gift
            cards.
          </p>
          <p>
            Please contact Chairs Rebecca and Herman Ovadia to let them know if you are bringing a basket at{" "}
            <a className="underline" href="tel:516-698-2863">
              516-698-2863
            </a>{" "}
            or{" "}
            <a className="underline" href="mailto:woodsidekiwanis@gmail.com">
              woodsidekiwanis@gmail.com
            </a>
            .
          </p>
        </blockquote>
      </main>
    </div>
  );
};

export default Home;
