import Ellipse from "../../utils/Ellipse.png"
import Database from "../../utils/Database.png"
const RepositoryCard = ({ name, type, language, size, updated}) => {
    return (
    <div className="bg-white rounded px-3 py-6  border-b-2 border-[#EAECEC] hover:bg-[#F4F5F4] cursor-pointer ">
      <div className="flex mb-2 md:mb-1 ml-2">
        <h3 className="text-[18px] md:text-[20px] font-normal">{name}</h3>
        <p className="flex items-center px-2 md:px-3 md:py-1 border-2 text-[#175CD3] text-[14px] border-[#B3DCFF] bg-[#EFF9FE] rounded-3xl ml-3">{type}</p>
      </div>
      <div className="flex ml-2">
      <p className="text-[14px] md:text-[16px] text-[#181D27]">{language}</p>
      <img src={Ellipse} alt={Ellipse} className="flex item-center w-[8px] h-[8px] ml-2 mr-5 md:mr-10 mt-1.5 md:mt-2"/>
      <img src={Database} alt={Database} className="flex item-center w-[10.5px] h-[12px] ml-2 mr-2  mt-1.5 md:mt-2"/>
      <p className="text-[14px] md:text-[16px] text-[#181D27] mr-5 md:mr-10">{size}</p>
      <p className="text-[14px] md:text-[16px] text-[#181D27]">Updated {updated}</p>
      </div>
    </div>
    )
}
  
  export default RepositoryCard;
  