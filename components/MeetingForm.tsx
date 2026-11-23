"use client"
import { useState, useActionState } from "react";
import type { State } from "@/lib/SacramentMeetingSchema";
import { SacramentMeeting, SpeakerItem } from "@/lib/types";



const textFieldClass ="rounded border border-gray-400 bg-gray-100 px-2 py-1 w-full";

const numberFieldClass ="rounded border border-gray-400 bg-gray-100 px-2 py-1 max-w-20";

const hymnFieldsetClass = "rounded bg-neutral p-2 flex flex-col items-center w-full border border-neutral-dark";

const labelClass = "rounded border border-neutral-dark p-2 w-full bg-neutral"; 

const initialState: State = { message: null, errors: {} };

type FormProps = {
  action: (
    previousState: State,
    formData: FormData
  ) => State | Promise<State>;

  meeting?: SacramentMeeting
};



export default function MeetingForm({ action, meeting }: FormProps){
  const [state, formAction, isPending] = useActionState(action, initialState);


  //if there are exisiting speakers use them, otherwise create new array
  const [speakers, setSpeakers] = useState<SpeakerItem[]>(
    meeting?.speakers ? meeting?.speakers : [] //{id:0, name: "", topic: "", type: "speaker" }
  );



  function addSpeaker(){

    const speakerCount = speakers.length;
    //remake speakers but add a new one
    setSpeakers((current) => [
      ...current,
      {id: speakerCount + 1, name: "", topic: "", type: "speaker" },
    ]);

  }

  function updateSpeaker(
    index: number,
    field: keyof SpeakerItem,
    value: string
  ){
    //remake speakers but change the matching field to the new value
    setSpeakers((current) =>
      current.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      )
    );
  }

  function removeSpeaker(index: number){
    //remake speakers but include the one with the matching id
    setSpeakers((current) => current.filter((_, i) => i !== index));
  }

  let wardBusinessItemsString = "";

  if(meeting?.wardBusiness){
    const descriptions: string[] = [];
    meeting?.wardBusiness.forEach((item)=>{
      descriptions.push(item.description);
    })

    wardBusinessItemsString = descriptions.join(",")
  }

  let announcementString = "";

  if(meeting?.announcements){
    announcementString = meeting?.announcements.join(",");

    
  }

  return (
    <form action={formAction} className="flex flex-col items-center md:grid md:grid-cols-2 md:grid-rows-10 gap-4 max-h-window bg-neutral-dark rounded-md p-4 max-w-4/5">
      
      <input
      type="hidden"
      name="speakers"
      value={JSON.stringify(speakers)}
    />

      <div className="bg-white flex flex-col items-center justify-center gap-2 md:row-span-9 p-4 rounded-md">
        <h2 className="font-bold">Program:</h2>
        
        <label htmlFor="meeting-date" className={labelClass}>Date:{" "}
          <input 
          className={textFieldClass} 
          type="date" 
          id="meeting-date" 
          name="meeting-date" 
          min="2026-11-01" 
          max="2040-12-31" 
          defaultValue={meeting?.date} 
          required
          aria-describedby="date-error"/>
          <div id="date-error" aria-live="polite" aria-atomic="true">
            {state.errors?.date?.map((error) => (
              <p key={error} className="mt-1 text-sm text-text-body p-2 font-semibold rounded bg-red-300">
                {error}
              </p>
            ))}
        </div>
        </label>
        
         

        <label htmlFor="meeting-type" className={labelClass}>Type:{" "}

          <select 
          id="meeting-type" 
          name="meeting-type" 
          className={textFieldClass} 
          defaultValue={meeting?.meetingType} 
          required
          aria-describedby="meeting-type-error">
            <option value="testimony">Testimony</option>
            <option value="regular">Regular</option>
            <option value="stake">Stake</option>
            <option value="general">General</option>
          </select>
          <div id="meeting-type-error" aria-live="polite" aria-atomic="true">
            {state.errors?.meetingType?.map((error) => (
              <p key={error} className="mt-1 text-sm text-text-body p-2 font-semibold rounded bg-red-300">
                {error}
              </p>
            ))}
          </div>

        </label>
        

        <fieldset className={hymnFieldsetClass} >
          <h3>Opening Hymn</h3>
          <label htmlFor="opening-hymn-number">Number:{" "}
            <input 
            className={numberFieldClass } 
            type="number" 
            id="opening-hymn-number" 
            required 
            name="opening-hymn-number" 
            min="0" max="2000" 
            defaultValue={meeting?.openingHymn.number}
            aria-describedby="opening-hymn-error"
            />
          </label>
         
          
          <label htmlFor="opening-hymn-title">Title:{" "}
            <input 
            className={textFieldClass} 
            type="text" 
            id="opening-hymn-title"
            required name="opening-hymn-title" 
            defaultValue={meeting?.openingHymn.title} 
            aria-describedby="opening-hymn-error"/>
          </label>
          <div id="opening-hymn-error" aria-live="polite" aria-atomic="true">
              {state.errors?.openingHymn?.map((error) => (
                <p key={error} className="mt-1 text-sm text-text-body p-2 font-semibold rounded bg-red-300">
                  {error}
                </p>
              ))}
            </div>
        </fieldset>
        
        
        <fieldset className={hymnFieldsetClass}>
          <h3>Sacrament Hymn</h3>
          <label htmlFor="sacrament-hymn-number">Number:{" "}
            <input className={numberFieldClass } type="number" id="sacrament-hymn-number" required name="sacrament-hymn-number" min="0" max="2000" defaultValue={meeting?.sacramentHymn.number} aria-describedby="sacrament-hymn-error"/>
          </label>
          
          
          <label htmlFor="sacrament-hymn-title">Hymn Title:{" "}
            <input className={textFieldClass} type="text" id="sacrament-hymn-title" required name="sacrament-hymn-title" defaultValue={meeting?.sacramentHymn.title} aria-describedby="sacrament-hymn-error"/>
          </label>
          <div id="sacrament-hymn-error" aria-live="polite" aria-atomic="true">
              {state.errors?.sacramentHymn?.map((error) => (
                <p key={error} className="mt-1 text-sm text-text-body p-2 font-semibold rounded bg-red-300">
                  {error}
                </p>
              ))}
            </div>
        </fieldset>
          

        <fieldset className={hymnFieldsetClass}>
          <h3>Closing Hymn</h3>
          <label htmlFor="closing-hymn-number">Number:{" "}
            <input className={numberFieldClass } type="number" id="closing-hymn-number" required name="closing-hymn-number" min="0" max="2000" defaultValue={meeting?.closingHymn.number} aria-describedby="closing-hymn-error"/>
          </label>
          
          
          <label htmlFor="closing-hymn-title">Title:{" "}
            <input className={textFieldClass} type="text" id="closing-hymn-title" required name="closing-hymn-title" defaultValue={meeting?.closingHymn.title} aria-describedby="closing-hymn-error"/>
          </label>
          <div id="closing-hymn-error" aria-live="polite" aria-atomic="true">
              {state.errors?.closingHymn?.map((error) => (
                <p key={error} className="mt-1 text-sm text-text-body p-2 font-semibold rounded bg-red-300">
                  {error}
                </p>
              ))}
            </div>
        </fieldset>
        

        <label htmlFor="presiding-member" className={labelClass}>Presiding Member:{" "}
          <input className={textFieldClass} type="text" id="presiding-member" name="presiding-member" required defaultValue={meeting?.presiding} aria-describedby="presiding-error"/>
          <div id="presiding-error" aria-live="polite" aria-atomic="true">
              {state.errors?.presiding?.map((error) => (
                <p key={error} className="mt-1 text-sm text-text-body p-2 font-semibold rounded bg-red-300">
                  {error}
                </p>
              ))}
            </div>  
        </label>
         

        <label htmlFor="conductor" className={labelClass}>Conductor:{" "}
          <input className={textFieldClass} type="text" id="conductor" name="conductor" required defaultValue={meeting?.conducting} aria-describedby="conducting-error"/>
          <div id="conducting-error" aria-live="polite" aria-atomic="true">
              {state.errors?.conducting?.map((error) => (
                <p key={error} className="mt-1 text-sm text-text-body p-2 font-semibold rounded bg-red-300">
                  {error}
                </p>
              ))}
            </div> 
        </label>
         

        <label htmlFor="ward-business" className={labelClass}>Ward Business:{" "}
          <input className={textFieldClass} type="text" id="ward-business" name="ward-business" placeholder="Enter Values Seperated by Commas" max="1000" defaultValue={wardBusinessItemsString} aria-describedby="ward-business-error"/>
          <div id="ward-business-error" aria-live="polite" aria-atomic="true">
              {state.errors?.wardBusiness?.map((error) => (
                <p key={error} className="mt-1 text-sm text-text-body p-2 font-semibold rounded bg-red-300">
                  {error}
                </p>
              ))}
            </div> 
        </label>

        <label htmlFor="announcements" className={labelClass}>announcements:{" "}
          <input aria-describedby="announcements-error" className={textFieldClass} type="text" id="announcements" name="announcements" placeholder="Enter Values Seperated by Commas" max="1000" defaultValue={announcementString} />
          <div id="announcements-error" aria-live="polite" aria-atomic="true">
              {state.errors?.announcements?.map((error) => (
                <p key={error} className="mt-1 text-sm text-text-body p-2 font-semibold rounded bg-red-300">
                  {error}
                </p>
              ))}
            </div> 
        </label>
         

        <label htmlFor="stake-business" className={labelClass}>Stake Business:{" "}
          <input type="checkbox" id="stake-business" name="stake-business" className="size-4 rounded border border-gray-400 accent-gray-600 mt-2" defaultChecked={meeting?.stakeBusiness}/>
          
        </label>
         

        <label htmlFor="opening-prayer" className={labelClass}>Opening Prayer:{" "}
          <input aria-describedby="opening-prayer-error" className={textFieldClass} type="text" id="opening-prayer" name="opening-prayer" required placeholder="Name of Member Assigned to Give Prayer" defaultValue={meeting?.openingPrayer}/>
          <div id="opening-prayer-error" aria-live="polite" aria-atomic="true">
              {state.errors?.openingPrayer?.map((error) => (
                <p key={error} className="mt-1 text-sm text-text-body p-2 font-semibold rounded bg-red-300">
                  {error}
                </p>
              ))}
            </div> 
        </label>
         

        <label htmlFor="closing-prayer" className={labelClass}>Closing Prayer:{" "}
          <input aria-describedby="closing-prayer-error" className={textFieldClass} type="text" id="closing-prayer" name="closing-prayer" required placeholder="Name of Member Assigned to Give Prayer" defaultValue={meeting?.closingPrayer}/>
          <div id="closing-prayer-error" aria-live="polite" aria-atomic="true">
              {state.errors?.closingPrayer?.map((error) => (
                <p key={error} className="mt-1 text-sm text-text-body p-2 font-semibold rounded bg-red-300">
                  {error}
                </p>
              ))}
            </div> 
        </label>
         


      </div>

      <div id="speakers-div" className="bg-accent flex flex-col gap-2 md:row-span-9 min-h-full min-w-full items-center rounded-md">
        <h2 className="font-bold">Speakers:</h2>
        {speakers.map((speaker:SpeakerItem, index:number)=>(
          <fieldset key={index} className="bg-white flex flex-col items-center justify-center p-4 m-1 max-w-1/2 rounded-md">
          <h3 className="font-semibold">New Speaker:</h3>

          

          <label htmlFor={`speaker-name-${index}`}>Name</label>
           <input className={textFieldClass} 
            name="speaker-name"
            id={`speaker-name-${index}`}
            type="text" 
            data-field="name" 
            required
            value={speaker.name}
            onChange={(event) =>
                updateSpeaker(index, "name", event.target.value)
              }
              aria-describedby={`speakers-error-${index}`}
          />
          

          <label htmlFor={`speaker-topic-${index}`}>Topic</label>
           <input className={textFieldClass} type="text"
          name="speaker-topic"
          id={`speaker-topic-${index}`}
          data-field="topic"
          value={speaker.topic} 
          onChange={(event) =>
                updateSpeaker(index, "topic", event.target.value)
              }
              aria-describedby={`speakers-error-${index}`}
          ></input>

          <label htmlFor={`speaker-type-${index}`}>Type</label>
          <select 
          id={`speaker-type-${index}`}
          name="speaker-type" 
          data-field="type" 
          value={speaker.type}
          required
          className={textFieldClass}
          onChange={(event) =>
                updateSpeaker(index, "type", event.target.value)
              }
              aria-describedby={`speakers-error-${index}`}>
            <option value="speaker">Speaker</option>
            <option value="musical-number">Musical number</option>
          </select>
    
          <button type="button" id="remove-speaker" onClick={() => removeSpeaker(index)} className="mt-3 border-2 border-accent border-solid rounded-lg py-.5 px-1 hover:bg-accent hover:text-background">Remove</button>
        
          <div id={`speakers-error-${index}`} aria-live="polite" aria-atomic="true">
              {state.errors?.speakers?.map((error, index) => (
                <p key={index} className="mt-1 text-sm text-text-body p-2 font-semibold rounded bg-red-300">
                  {error}
                </p>
              ))}
            </div> 
        </fieldset>
        ))}
        
      </div>
      
      <div className="bg-white flex gap-2 md:row-start-10 md:col-span-2 max-h-20 justify-center rounded-md p-2">

        <button type="button" id="add-speaker" onClick={() => addSpeaker()} className="border-2 border-neutral-dark border-solid rounded-lg py-.5 px-1 hover:bg-neutral hover:text-background">Add Speaker</button>

      
        <button type="submit" disabled={isPending} className="border-2 border-primary border-solid rounded-lg py-.5 px-1 hover:bg-primary hover:text-background">
          {isPending ? "Saving…" : "Save"}
        </button>

        {state.message && <p>{state.message}</p>}

      </div>
      


    </form>
  );
}