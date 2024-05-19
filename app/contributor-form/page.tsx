'use client';
// import react from "React";
import AllFormFields from '@/components/forms/page';
import formStyles from './forms.module.css';




export default function UsersPage(){   

    return(
        
        <>
             {/* Navbar (To be removed) */}
            <div style={{border:'1px solid black', height:'70px',backgroundColor:'#0F172A'}}> </div>

            {/* Form Section */}

            <div className={formStyles.mainFormContainer}>
                <div>
                    <h1> Add Project</h1>

                    <div style={{}}>
                        
                        {/* All Form Fields */}

                        <AllFormFields/>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

// export default UsersPage;