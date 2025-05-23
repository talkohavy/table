import{r as n,j as e}from"../../main/index-C-V8LVo7.js";import{T as M}from"./Table.CglSOpJy.js";import{C as x}from"./CodeBlock.Cj8LsT4-.js";function u(a,m){const t=["Alex","Jamie","Taylor","Jordan","Casey","Morgan","Riley","Avery","Quinn","Blake"],o=["Smith","Johnson","Williams","Brown","Jones","Miller","Davis","Garcia","Rodriguez","Wilson"],s=["gmail.com","yahoo.com","hotmail.com","outlook.com","icloud.com","protonmail.com","mail.com"],r=["Male","Female","Non-binary","Other"];return Array.from({length:m},(f,d)=>{const l=a+d,i=t[Math.floor(Math.random()*t.length)],c=o[Math.floor(Math.random()*o.length)],g=s[Math.floor(Math.random()*s.length)],p=r[Math.floor(Math.random()*r.length)];return{id:l,first_name:i,last_name:c,email:`${i.toLowerCase()}.${c.toLowerCase()}${l}@${g}`,gender:p,ip_address:`${Math.floor(Math.random()*256)}.${Math.floor(Math.random()*256)}.${Math.floor(Math.random()*256)}.${Math.floor(Math.random()*256)}`}})}const y="_myTable_j6k1j_1",b="_spinnerContainer_j6k1j_25",j="_spinner_j6k1j_25",h={myTable:y,spinnerContainer:b,spinner:j};function T(){const[a,m]=n.useState(()=>u(1,20)),[t,o]=n.useState(!1),[s,r]=n.useState(!0),f=()=>{setTimeout(()=>{if(a.length>=100){r(!1),o(!1);return}const i=u(a.length+1,10);m(c=>[...c,...i]),o(!1)},800)},d=n.useCallback(()=>{t||!s||(o(!0),f())},[a.length,t,s]),l=n.useMemo(()=>[{accessorKey:"id",header:"ID"},{accessorKey:"first_name",header:"First Name"},{accessorKey:"last_name",header:"Last Name"},{accessorKey:"email",header:"Email"},{accessorKey:"gender",header:"Gender"},{accessorKey:"ip_address",header:"IP Address"}],[]);return e.jsxs("div",{className:"flex flex-col justify-start items-start gap-4 size-full p-10",children:[e.jsx("h1",{className:"text-2xl font-bold",children:"Table with Infinite Scroll"}),e.jsxs("div",{className:"flex flex-col gap-2 w-full",children:[e.jsxs("p",{children:["This example demonstrates using the ",e.jsx("code",{children:"onBottomReached"})," feature to implement infinite scrolling. When the user scrolls to the bottom of the table, more data is loaded automatically."]}),e.jsxs("p",{children:["Current records: ",a.length," ",!s&&"(max reached)"]})]}),e.jsxs("div",{className:"relative w-full",children:[e.jsx(M,{data:a,columnDefs:l,className:h.myTable,onBottomReached:d}),t&&e.jsx("div",{className:h.spinnerContainer,children:e.jsx("p",{className:h.spinner})})]}),e.jsx(x,{className:"w-full border mt-4",language:"typescript",code:`import { useCallback, useMemo, useState } from 'react';
import { Table } from '../../../lib';

const generateMockData = (startId, count) => {
  // ... implementation omitted for brevity
};

export default function TableWithInfiniteScroll() {
  // Start with an initial batch of 20 records
  const [data, setData] = useState(() => generateMockData(1, 20));
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  
  // Simulating loading more data when bottom is reached
  const handleBottomReached = useCallback(() => {
    if (isLoading || !hasMore) return;
    
    setIsLoading(true);
    
    // Simulate API call with setTimeout
    setTimeout(() => {
      // If we already have a lot of data, let's stop loading more
      if (data.length >= 100) {
        setHasMore(false);
        setIsLoading(false);
        return;
      }
      
      // Generate the next batch of data
      const newData = generateMockData(data.length + 1, 10);
      setData(prevData => [...prevData, ...newData]);
      setIsLoading(false);
    }, 800); // Simulate network delay
  }, [data.length, isLoading, hasMore]);

  // Column definitions
  const columnDefs = useMemo(() => [
    { accessorKey: 'id', header: 'ID' },
    { accessorKey: 'first_name', header: 'First Name' },
    // ... other columns
  ], []);

  return (
    <div>
      <Table 
        data={data} 
        columnDefs={columnDefs}
        onBottomReached={handleBottomReached}
      />
      {isLoading && <p>Loading more data...</p>}
    </div>
  );
}`})]})}export{T as default};
//# sourceMappingURL=../../sourcemaps/index.D2Fsqwlu.js.map
