import React from "react";

const ScrollContainer: React.FC = () => {
  return (
    <main>
      <div
        className="slider"
        style={
          {
            "--width": "300px", // Adjust width as needed
            "--height": "150px", // Adjust height as needed
            "--item-width": "250px", // Width of each item, including gap
            "--item-height": "150px", // Height of each item
            "--gap": "20px", // Gap between items
          } as React.CSSProperties
        }
      >
        <div className="list">
          <div
            className="item"
            style={{ "--position": "1" } as React.CSSProperties}
          >
            <div className="box">
              <h1 className="flex gap-2 items-center">
                Web Development
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </h1>
              <p>
                Willware Website Development Company will help you creating a
                state of the art website for your business by running multiple
                language currency and unique design.
              </p>
            </div>
          </div>
          <div
            className="item"
            style={{ "--position": "2" } as React.CSSProperties}
          >
            <div className="box">
                
              <h1 className="flex gap-2 items-center">
              Recruitment{" "}<span className="bg-yellow-600 rounded-full w-2 h-2 relative mr-2"></span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </h1>
              <p>
                We believe in partnering with our clients and delivering a
                strong foundation of talent to support future business results.
                We work to understand our clients’ specific requirements, beyond
                just technical skills, letting us find the right fit
                expeditiously.
              </p>
            </div>
          </div>
          <div
            className="item"
            style={{ "--position": "3" } as React.CSSProperties}
          >
            <div className="box">
              <h1 className="flex gap-2 items-center">
                Graphic Designing{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </h1>
              <p>
                Create a logo you’ll love for your brand & Get a logo with your
                brand’s look & feel, based on beautiful logo designs made by
                Willware’s designers.
              </p>
            </div>
          </div>
          <div
            className="item"
            style={{ "--position": "4" } as React.CSSProperties}
          >
            <div className="box">
              <h1 className="flex gap-2">
                Hire UI/UX Developer{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </h1>
              <p>
                UI/UX Consulting At Willware, we have more than 200+ software
                developers, designers, testers, and consultants
              </p>
            </div>
          </div>
          <div
            className="item"
            style={{ "--position": "1" } as React.CSSProperties}
          >
            <div className="box">
              <h1 className="flex gap-2 items-center">
                Web Development
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </h1>
              <p>
                Willware Website Development Company will help you creating a
                state of the art website for your business by running multiple
                language currency and unique design.
              </p>
            </div>
          </div>
          <div
            className="item"
            style={{ "--position": "2" } as React.CSSProperties}
          >
            <div className="box">
              <h1 className="flex gap-2 items-center">
              Recruitment{" "}<span className="bg-yellow-600 rounded-full w-2 h-2 relative mr-2"></span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </h1>
              <p>
                We believe in partnering with our clients and delivering a
                strong foundation of talent to support future business results.
                We work to understand our clients’ specific requirements, beyond
                just technical skills, letting us find the right fit
                expeditiously.
              </p>
            </div>
          </div>
          <div
            className="item"
            style={{ "--position": "3" } as React.CSSProperties}
          >
            <div className="box">
              <h1 className="flex gap-2 items-center">
                Graphic Designing{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </h1>
              <p>
                Create a logo you’ll love for your brand & Get a logo with your
                brand’s look & feel, based on beautiful logo designs made by
                Willware’s designers.
              </p>
            </div>
          </div>
          <div
            className="item"
            style={{ "--position": "4" } as React.CSSProperties}
          >
            <div className="box">
              <h1 className="flex gap-2">
                Hire UI/UX Developer{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </h1>
              <p>
                UI/UX Consulting At Willware, we have more than 200+ software
                developers, designers, testers, and consultants
              </p>
            </div>
          </div>

          <div
            className="item"
            style={{ "--position": "1" } as React.CSSProperties}
          >
            <div className="box">
              <h1>Web Development</h1>
              <p>
                Willware Website Development Company will help you creating a
                state of the art website for your business by running multiple
                language currency and unique design.
              </p>
            </div>
          </div>
          <div
            className="item"
            style={{ "--position": "2" } as React.CSSProperties}
          >
            <div className="box">
              <h1>Recruitment</h1>
              <p>
                We believe in partnering with our clients and delivering a
                strong foundation of talent to support future business results.
                We work to understand our clients’ specific requirements, beyond
                just technical skills, letting us find the right fit
                expeditiously.
              </p>
            </div>
          </div>
          <div
            className="item"
            style={{ "--position": "3" } as React.CSSProperties}
          >
            <div className="box">
              <h1>Graphic Designing</h1>
              <p>
                Create a logo you’ll love for your brand & Get a logo with your
                brand’s look & feel, based on beautiful logo designs made by
                Willware’s designers.
              </p>
            </div>
          </div>
          <div
            className="item"
            style={{ "--position": "4" } as React.CSSProperties}
          >
            <div className="box">
              <h1>Hire UI/UX Developer</h1>
              <p>
                UI/UX Consulting At Willware, we have more than 200+ software
                developers, designers, testers, and consultants
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ScrollContainer;
