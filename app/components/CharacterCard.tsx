"use client";

interface FeedbackProps {
  message: string;
  name?: string;
  image: string;
  color: string;
}

export default function CharacterCard({ message, name, image, color }: FeedbackProps) {
  return (
    <div className={`character-feedback-card box-section-${color}`}>
        <div className="flex-start-start flex-column">
            <div className="character-card-avatar" style={{border: `2px solid var(--${color})`, backgroundImage: `url('${image}')`}}></div>
            <p className="character-card-message" ><i>{message}</i>
            <br></br>
            {name && (<strong className="no-text-spacing" style={{color: `var(--${color})`, marginTop: '15px'}}>-{name}</strong>)}
            </p>
            
            
        </div>
        
    
      
    </div>
  );
}
