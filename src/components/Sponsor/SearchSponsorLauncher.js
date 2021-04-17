import useCallApi from '../CustomHooks/useCallApi'
import Spinner from '@material-ui/core/LinearProgress';
import React from 'react';
import CompanyTable from './SponsorTable'
import {  useParams } from "react-router-dom";



function SearchCompanyLauncher ({keyword,selectedRow,setSelectedRow}) {

    const params= useParams()
    const [isLoading, data] = useCallApi(`/v1/company/searchcompanies?keyword=${keyword}`)
    if(isLoading || !data ) {
        return <Spinner />
        }


   return (
       <React.Fragment>
           <CompanyTable 
               data={data}
               selectedRow={selectedRow}
               setSelectedRow={setSelectedRow}
           />
       </React.Fragment>
   )
}

export default SearchCompanyLauncher
