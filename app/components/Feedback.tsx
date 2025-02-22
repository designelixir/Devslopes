"use client";

interface FeedbackProps {
  message: string;
  name?: string;
  image: string;
  color: string;
}

export default function Feedback({ message, name, image, color }: FeedbackProps) {
  return (
    <div className={`feedback-container`}>
        <div className="flex-center-center flex-column">
            <div className="feedback-avatar" style={{border: `2px solid var(--${color})`, backgroundImage: `url('${image}')`}}></div>
            {name && (
                
                
                <strong style={{color: 'black', marginTop: '15px'}}>{name}</strong>
                
            )}
            <p className="feedback-message" ><i>{message}</i></p>
        </div>
        
    
      
    </div>
  );
}
