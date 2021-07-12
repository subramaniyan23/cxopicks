import React from "react";
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { ToastAlert } from '../../utils/sweetalert2';

/**
 * Profile Component
 */
class Profile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            profile_pic: '',
            consultant_name: '',
            bio: '',
            cost_per_hour: '',
            linkedin_proflie: '',
            website: '',
            company_name: '',
            job_title: '',
            job_period: '',
            industry_certifications: '',
            consulting_language: '',
            submitted: false,
            costOptions: [
                { label: "$10" , value: "10"}, { label: "$20" , value: "20"},
                { label: "$30" , value: "30"}, { label: "$40" , value: "40"},
                { label: "$50" , value: "50"}, { label: "$60" , value: "60"}
            ],
            languageOptions: [
                { label: "English" , value: "1"}, { label: "Spanish" , value: "2"},
                { label: "German" , value: "30"}, { label: "Chinese" , value: "40"},
                { label: "French" , value: "50"}, { label: "Japanese" , value: "60"}
            ]
		};
	}

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onFileChange = (e) => {
        this.setState({ profile_pic: URL.createObjectURL(e.target.files[0])})
    };

    onCancel = (e)=>{
        this.setState({ 
            profile_pic: '',
            consultant_name: '',
            bio: '',
            cost_per_hour: '',
            linkedin_proflie: '',
            website: '',
            company_name: '',
            job_title: '',
            job_period: '',
            industry_certifications: '',
            consulting_language: '',
            submitted: false,
        })
    }

    onContinue = (e)=>{
        this.setState({ submitted: true });

        const { profile_pic, consultant_name, bio, cost_per_hour, linkedin_proflie, website, company_name, job_title, job_period, industry_certifications, consulting_language } = this.state;

        if (!profile_pic || !consultant_name || !bio || 
            !cost_per_hour || !linkedin_proflie || !website || 
            !company_name || !job_title || !job_period || job_period.length == 0 || 
            !industry_certifications || !consulting_language || consulting_language.length == 0) {
            return;
        } else {
            this.onCancel();
            ToastAlert('success', "Submitted Successfully");

        }
    }
    

    /**
     * main render
     * @returns 
     */
	render() {
        const { profile_pic, consultant_name, bio, cost_per_hour, linkedin_proflie, website, company_name, job_title, job_period, industry_certifications, consulting_language, submitted } = this.state;
		return (
            
                <div class="page-wrapper">
                    <div class="col-lg-12 col-md-12 col-12 p-0">
                        <h2 className="page_heading">Profile Details</h2>
                    </div>
                    <div class="grey_box_bg">
                        <h6 className="main-heading"><span className="fa fa-user-o mr-3"></span>Personal Information</h6>
                        <div class="content-wrapper">
                            <div class="card-body p-0 my-4">
                                <div class="mx-0 form_fields_grey_bg">
                                    <div class="row m-0 bor_btm_span">
                                        <div className="upload_photo_bg">
                                            <img 
                                                src={profile_pic}
                                                onError={(e)=>{e.target.onerror = null; e.target.src=''}}
                                                className=""
                                                alt="" 
                                                width="100" 
                                                height="100" 
                                            />
                                        </div>
                                        <div className="col-md-6 mt-4 text-center text-md-left">
                                            <span class="upload-profile-label">Upload Profile Pic</span>
                                            <span className="d-block to-choose-a-file">
                                                <input type="file" id="actual-btn" onChange={this.onFileChange} hidden accept="image/*"/>
                                                <label for="actual-btn" className="blue_link">Click here</label>to choose a file<br/>
                                                {submitted && !profile_pic && (
                                                    <span id="email-error" className="text-danger" >Profile Pic is Required</span>
                                                )}
                                            </span>
                                        </div>                                        
                                    </div>
                                    <div class="row">
                                        <div class="form-group col-md-4">
                                            <label class="form-label">Consultant Name<span class="required-red">*</span></label>
                                            <input type="text" className={"form-control " + ((submitted && !consultant_name) ? "is-invalid" : "")} name="consultant_name" value={consultant_name} placeholder="Type here" onChange={this.onChange} />
                                            {submitted && !consultant_name && (
                                                <span id="email-error" className="error invalid-feedback" >Consultant Name is Required</span>
                                            )}
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="form-group col-md-8">
                                            <label class="form-label">Bio<span class="required-red">*</span></label>
                                            <textarea className={"form-control " + ((submitted && !bio) ? "is-invalid" : "")} name="bio" value={bio} placeholder="Type here" onChange={this.onChange} rows="8"></textarea>
                                            {submitted && !bio && (
                                                <span id="email-error" className="error invalid-feedback" >Bio is Required</span>
                                            )}
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="form-group col-md-4">
                                            <label class="form-label">Cost per hour<span class="required-red">*</span></label>
                                            <Select
                                                className="basic-single-select"
                                                placeholder="Select here"
                                                isClearable
                                                isSearchable={false}
                                                classNamePrefix={"select_dropdown"}
                                                onChange={(selected) => {
                                                    this.setState({ cost_per_hour: selected});
                                                }}
                                                value={cost_per_hour}
                                                options={this.state.costOptions}
                                            />
                                            {submitted && !cost_per_hour && (
                                                <span id="email-error" className="text-danger" >Cost per hour is Required</span>
                                            )}
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label class="form-label">Linkedin Profile<span class="required-red">*</span></label>
                                            <input type="text" class={"form-control " + ((submitted && !linkedin_proflie) ? "is-invalid" : "")} name="linkedin_proflie" value={linkedin_proflie} placeholder="Type here" onChange={this.onChange}/>
                                            {submitted && !linkedin_proflie && (
                                                <span id="email-error" className="error invalid-feedback" >Linkedin Profile is Required</span>
                                            )}
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label class="form-label">Website<span class="required-red">*</span></label>
                                            <input type="text" class={"form-control " + ((submitted && !website) ? "is-invalid" : "")} name="website" value={website} placeholder="Type here" onChange={this.onChange}/>
                                            {submitted && !website && (
                                                <span id="email-error" className="error invalid-feedback" >Website is Required</span>
                                            )}
                                        </div>
                                    </div>
                                    <div class="row mt-4">
                                        <h6 className="main-heading"><span className="far fa-building mr-3"></span>Professional Information</h6>
                                        <div class="form-group col-md-4">
                                            <label class="form-label">Company Name<span class="required-red">*</span></label>
                                            <input type="text" class={"form-control " + ((submitted && !company_name) ? "is-invalid" : "")} name="company_name" value={company_name} placeholder="Type here" onChange={this.onChange}/>
                                            {submitted && !company_name && (
                                                <span id="email-error" className="error invalid-feedback" >Company Name is Required</span>
                                            )}
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label class="form-label">Job Title<span class="required-red">*</span></label>
                                            <input type="text" class={"form-control " + ((submitted && !job_title) ? "is-invalid" : "")} name="job_title" value={job_title} placeholder="Type here" onChange={this.onChange}/>
                                            {submitted && !job_title && (
                                                <span id="email-error" className="error invalid-feedback" >Job Title is Required</span>
                                            )}
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label class="form-label">Job Period<span class="required-red">*</span></label>
                                            <CreatableSelect
                                                className="basic-single-select"
                                                placeholder="Add here"
                                                isClearable
                                                isMulti
                                                classNamePrefix={"select_dropdown"}
                                                onChange={(selected) => {
                                                    this.setState({ job_period: selected});
                                                }}
                                                value={job_period}
                                                options={[]}
                                            />
                                            {((submitted && !job_period) || (submitted && job_period.length == 0)) && (
                                                <span id="email-error" className="text-danger" >Job Period is Required</span>
                                            )}
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label class="form-label">Industry Certifications<span class="required-red">*</span></label>
                                            <input type="text" class={"form-control " + ((submitted && !industry_certifications) ? "is-invalid" : "")} name="industry_certifications" value={industry_certifications} placeholder="Type here" onChange={this.onChange}/>
                                            {submitted && !industry_certifications && (
                                                <span id="email-error" className="error invalid-feedback" >Industry Certifications is Required</span>
                                            )}
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label class="form-label">Consulting Language<span class="required-red">*</span></label>
                                            <Select
                                                className="basic-single-select"
                                                placeholder="Select here"
                                                isClearable
                                                isMulti
                                                classNamePrefix={"select_dropdown"}
                                                onChange={(selected) => {
                                                    this.setState({ consulting_language: selected});
                                                }}
                                                value={consulting_language}
                                                options={this.state.languageOptions}
                                            />
                                            {((submitted && !consulting_language) || (submitted && consulting_language.length == 0)) && (
                                                <span id="email-error" className="text-danger" >Consulting Language is Required</span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 buttons-group">
                                    <a onClick={this.onCancel} className="grey_btn_bg mr-3">Cancel</a>
                                    <button 
                                        onClick={(e) => { 
                                            e.currentTarget.blur();
                                            this.onContinue();
                                        }} 
                                        className="yellow-btn"
                                    >
                                        Continue
                                    </button>
                                </div>
                            </div>
                        </div>
                   </div>
                </div>
            
		);
	}
}


export default Profile;
