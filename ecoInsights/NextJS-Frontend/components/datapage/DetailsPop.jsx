import React from 'react'

const DetailsPop = () => {
  return (
    <div>
        <div>
            <div className="bg-[#D75E4E] flex items-center justify-center w-[20vw] h-[6vh] text-2xl rounded-t-lg">
                <div className="flex flex-col items-center ">Air Quality</div>
                <div className="bg-[#d8968d]  px-4 w-[20vw] text-xl font-semibold flex flex-col gap-6 rounded-b-lg">
                    <div className="flex">
                        <p>m</p>:<p>10</p>
                    </div>
                    <div className="flex">
                        <p>no2</p>:<p>10</p>
                    </div>
                    <div className="flex">
                        <p>so2</p>:<p>10</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DetailsPop