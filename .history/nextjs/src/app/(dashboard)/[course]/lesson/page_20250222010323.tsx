import React from 'react';

const page = ({ params, searchParams }: { params: any; searchParams: any }) => {
  console.log(params);
  console.log(searchParams);
  return <div>Lesson</div>;
};

export default page;
