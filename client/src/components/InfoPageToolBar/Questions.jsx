import React from "react";

function Questions() {
  return (
    <div>
      <h1 className="text-center text-4xl  font-thin mb-12">שאלות נפוצות</h1>

      <div className="flow-root">
        <div className="-my-8 -y divide-gray-100">
          <details
            className="group py-8 [&_summary::-webkit-details-marker]:hidden"
            open
          >
            <summary className="flex items-center justify-between cursor-pointer">
              <h2 className="text-lg font-medium text-right text-gray-900">
                ? מה הסכום המינימלי להזמנה
              </h2>
              <span className="relative ml-1.5 h-5 w-5 flex-shrink-0 text-cyan-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 w-8 h-8 opacity-100 group-open:opacity-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 w-8 h-8 opacity-0 group-open:opacity-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            </summary>
            <p className="mt-4 leading-relaxed text-gray-700">
              {" "}
              ניתן לרכוש באתר שלנו בכל סכום
            </p>
          </details>
          <details className="group py-8 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between cursor-pointer">
              <h2 className="text-lg font-medium text-gray-900">
                ? איך יוצרים איתכם קשר
              </h2>
              <span className="relative ml-1.5 h-5 w-5 flex-shrink-0  text-cyan-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 w-8 h-8 opacity-100 group-open:opacity-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 w-8 h-8 opacity-0 group-open:opacity-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            </summary>
            <p className="mt-4 leading-relaxed text-gray-700">
              ניתן ליצור איתנו קשר במספר הטלפון:0506543288
            </p>
          </details>
          <details className="group py-8 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between cursor-pointer">
              <h2 className="text-lg font-medium text-gray-900">
                ? מה האפשרויות תשלום באתר
              </h2>
              <span className="relative ml-1.5 h-5 w-5 flex-shrink-0  text-cyan-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 w-8 h-8 opacity-100 group-open:opacity-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 w-8 h-8 opacity-0 group-open:opacity-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            </summary>
            <p className="mt-4 leading-relaxed text-gray-700">
              האתר שלנו מאפשר ללקוחות לשלם בכל סכום שהם רוצים באמצעות כרטיסי אשאראי
            </p>
          </details>

        </div>
      </div>
    </div>
  );
}

export default Questions;
