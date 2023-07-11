import { CircularProgress } from "@material-ui/core"
import useFetch from "../../hooks/useFetch"
import "./propertyList.css"

const PropertyList=()=>{
    const {data,loading,error}=useFetch("/hotels/countByType")

    const images=[
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTye2bKuzhIU_SHB5N22ByKfIWy4B4qNVQyYw&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOezkrX30R99qyY-rfh2FSc3R3lB5oz_ykoQ&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQioDbvXTXMmvxpSxkSFJFLyelHi1dkVkktyA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeMBHECr95tCM_eR9KljZ9Q8dIY3Qahwyubg&usqp=CAU"



    ]
    return(
        <div className="pList">
            { loading ? < CircularProgress/> : (<>
            {data && images.map((img,i)=>(

            <div className="pListItem">
                <img src={img} alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1 >{data[i]?.type}</h1>
                    <h2>{data[i]?.count} {data[i]?.type} </h2>
                </div>
            

            
            
            </div>))}
        </>
    )}
            


           
            
     </div>
    )
}
export default PropertyList