import React from 'react'

const Checkout = () => {
  return (
    <div>
<h2 className="text-center text-2xl mb-10">Book Service</h2>

<form className="w-full space-y-4" action="">
    <div className="flex gap-4">
    <div className="flex w-full flex-col">
    <label htmlFor="">Name:</label>
    <input className ="border rounded px-4 py-1 w-full" type="text" />
    </div>
    <div className="flex w-full flex-col">
    <label htmlFor="">Date:</label>
    <input className ="border rounded px-4 py-1 w-full" type="date" />
    </div>
    </div>
    <div className="flex gap-4">
    <div className="flex w-full flex-col">
    <label htmlFor="">Email:</label>
    <input className ="border rounded px-4 py-1 w-full" type="email" />
    </div>
    <div className="flex flex-col w-full">
    <label htmlFor="">Due Amount:</label>
    <input className ="border rounded px-4 py-1 w-full" type="number" />
    </div>
    </div>
    <div className="flex gap-4">
    <div className="flex w-full flex-col">
    <label htmlFor="">Phone:</label>
    <input className ="border rounded px-4 py-1 w-full" type="text" />
    </div>
    <div className="flex w-full flex-col">
    <label htmlFor="">Present Address:</label>
    <input className ="border rounded px-4 py-1 w-full" type="text" />
    </div>
    </div>
    <button className="btn btn-success">Order Confirm</button>
  
   
</form>

    </div>
  )
}

export default Checkout