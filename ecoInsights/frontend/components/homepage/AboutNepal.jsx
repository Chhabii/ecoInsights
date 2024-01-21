import Image from "next/image";

function AboutNepal() {
  return (
    <div className="flex flex-col  w-screen justify-center items-center" id="aboutnepal">
      <div>
        <h1 className="text-[#0DAA99] text-center text-[50px] font-bold">
          About Nepal
        </h1>
      </div>
      <div className="flex flex-col">
        <div>
          <h2 className="text-[#0DAA99] font-medium text-[30px] ml-10 flex justify-start">
            Summary
          </h2>
        </div>
        <div>
          <Image src="/Summary.png" height={2000} width={2000} />
        </div>
      </div>
      <div className="flex flex-col mt-10">
        <div>
          <h2 className="text-[#0DAA99] font-medium text-[30px] ml-10 flex justify-start">
            Headline Indicators
          </h2>
        </div>
        <div className="p-6">
          <Image src="/Indicator.png" height={2000} width={2000} />
        </div>
      </div>
      <div className="w-[100vw] h-[100vh]">
        <h2 className="text-[#0DAA99] font-medium text-[30px] ml-10 flex justify-start">
          SDGs Statistics
        </h2>
        <div className="h-full w-full p-6">
          <iframe
            width="100%"
            height="100%"
            title="No Poverty"
            src="https://unstats.un.org/sdgs/dataportal/countryprofiles/NPL?goal=1&series=SI_POV_EMP1,SD_MDP_MUHC,SD_MDP_ANDI,SI_COV_MATNL,SI_COV_POOR,SI_COV_CHLD,SI_COV_UEMP,SI_COV_VULN,SI_COV_WKINJRY,SI_COV_BENFTS,SI_COV_DISAB,SI_COV_PENSN,SP_ACS_BSRVH2O,SP_ACS_BSRVSAN,SD_XPD_ESED"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default AboutNepal;