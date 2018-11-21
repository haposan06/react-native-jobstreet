import axios from 'axios'
import qs from 'qs';
import reverseGeoCode from 'latlng-to-zip'
import JOB_DATA from '../IndeedJobData'
import {CLEAR_LIKE_JOB, FETCH_JOBS, LIKE_JOB} from "./types";

const JOBS_URL = 'https://jobs.github.com/positions.json?';
const JOB_QUERY_PARAMS= {
    lat: 37.3229978,
    long: -122.0321823
};

const buildJobsUrl = (region)=>{
  const query = qs.stringify({...JOB_QUERY_PARAMS, lat: region.latitude, long: region.longitude});
  console.log(query);
  return `${JOBS_URL}${query}`;
};

export const fetchJobs = (region, callback)=> async (dispatch) => {
    try {
        const data = JOB_DATA;
        console.log(data);
        dispatch({ type: FETCH_JOBS, payload: data });
        callback();
    } catch (e) {
        console.log(e);
    }
};

export const likedJobs = (job) => {
    return {
        payload: job,
        type: LIKE_JOB
    }
};

export const clearLikedJobs = () => {
    return {type: CLEAR_LIKE_JOB}
};