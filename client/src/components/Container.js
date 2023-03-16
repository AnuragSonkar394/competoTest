import React from 'react'

const Container = () => {
    return (
        <div >

            <div class="card  bg-white text-black w-75 p-3 mx-auto ">
                <span class="card-header font-weight-bold mx-auto">Gorakhpur Leauge  </span>

                <div class="card-body ">

                    <div><span><span class="material-icons align-bottom">calendar_today</span>  27 MAY 2022 - 3 JUNE 2022 </span>
                        <span class="ml-5"><span class="material-icons align-bottom">fmd_good</span>  MMMUT Gorakhpur </span>
                        <span class="ml-5"><span class="material-icons align-bottom">female</span>  Female </span>
                        <span class="ml-5"><span class="material-icons align-bottom">today</span>  Under 16 </span>
                    </div>
                    <div class="mt-4 mx-auto"><div > <span class="card-title mt-5 ">Entree Fee</span><span class="material-icons align-bottom ">currency_rupee </span> <span>200</span>
                        <span class="card-title ml-5   ">Winning Prize</span><span class="material-icons align-bottom ">currency_rupee </span> <span>2000</span>
                    </div></div>
                    <button type="button" class="btn btn-success mt-2">More Detail</button>
                    <a href="/registercontest" class="btn btn-primary mt-3 float-right">Register</a>
                </div>
            </div>
        </div>
    )
}

export default Container