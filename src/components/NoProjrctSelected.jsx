import Button from './Button';

import noProjectImage from '../assets/no-projects.png';

export default function NoProjectSelected({ onStartAddProject }) {
    return <div className='mt-24 text-center w-2/3'>
        <img src={noProjectImage} alt="No Project Selected" className='w-16 h-16 object-contain mx-auto'/>
        <h2 className='text-xl font-bold text-stone-500 mt-4 my-4'>No Project Selected</h2>
        <p className="text-stone-400 mb-4">Please select a project from the sidebar or create a new one.</p>
        <p>
            <Button onClick={onStartAddProject}>Create New Project</Button>
        </p>
    </div>
}