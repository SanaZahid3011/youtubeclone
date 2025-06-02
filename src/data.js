export const API_KEY='AIzaSyB_C1ePb9EiwhvDgZ_MABjRLGn_Lu8R9-4';

export const Value_Converter=(value)=>{
    if(value>=1000000)
    {
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000)
    {
        return Math.floor(value/1000)+"K";
    }
    else
    {
        return value;
    }
}