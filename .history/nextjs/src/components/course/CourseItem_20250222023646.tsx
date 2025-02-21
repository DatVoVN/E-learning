import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CourseItem = () => {
  return (
    <div className="bg-white border border-gray-200 p-5 rounded-lg">
      <Link href="#" className="block">
        <Image
          alt=""
          src="https://unsplash.com/photos/a-close-up-of-a-sandwich-on-a-plate-PNFFiTMJjvA"
        />
      </Link>
    </div>
  );
};

export default CourseItem;
