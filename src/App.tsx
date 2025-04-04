import "./App.css";
import "tailwindcss";

function App() {
  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    
    const target = e.target as HTMLElement
    let a;
    if (!target.style.top && !target.style.left) a = '00'
    if (!target.style.top && target.style.left) a = '01'
    if (target.style.top && target.style.left) a = '11'
    if (target.style.top && !target.style.left) a = '10'
    switch(a) {
      case ('00'):
        target.style.left = document.documentElement.clientWidth - 100  + 'px'
        break
      case ('01'):
        target.style.top = document.documentElement.clientHeight - 100  + 'px'
        break
      case ('11'):
        target.style.left = ''
        break
      case ('10'):
        target.style.top = ''
        break
    }
    // if (target.style.left && !target.style.top) target.style.top = document.documentElement.clientHeight - 100  + 'px'
    // if (target.style.top && target.style.left) {target.style.left = '' }    
  }
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="w-100 bg-rose-50 rounded-2xl">
          <h1 className="text-lime-800 bg-green-100 m-3 p-2 flex justify-center items-center rounded-2xl border-3 hover:bg-green-200 hover:shadow-cyan-600/50
          hover:shadow-md hover:animate-pulse">123 ₽</h1>
          <h1 className="text-neutral-500 bg-green-100 m-3 p-2 line-through flex justify-end rounded-2xl border-2 hover:bg-green-200 hover:shadow-cyan-600/50
          hover:shadow-md">223 ₽</h1>
          <div className="flex gap-3 justify-center items-center m-2">
            <div className="bg-red-300 rounded-full w-10 h-10 flex items-center justify-center"><span className="text-amber-700 text-2xl rotate-88">V</span></div>
            <div className="text-black text-3xl font-bold">Price</div>
          </div>
          <div className="box" onClick={onClick}></div>          
        </div>        
      </div>
    </>
  );
}

export default App;
