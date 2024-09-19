import React, { useState, useEffect } from 'react';

export default function UserReservation() {
  // Defino state për secilën fushë të formës
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [reservationDate, setReservationDate] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const [firstName,setFirstName] = useState('')
  const [lastName,setLastName] = useState('')
  const [userId, setUserId] = useState('');  
  const [eventID, setEventID] = useState(0);

  // Merr UserId nga localStorage kur komponenti ngarkohet
  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    const storedRoleId = localStorage.getItem('roleId');
    const storedFirstName = localStorage.getItem('firstName')
    const storedLastName = localStorage.getItem('lastName')
  
    console.log('role id from storage', storedRoleId);
    console.log('User ID from localStorage:', storedUserId);
    console.log('User ID from localStorage:', storedFirstName);
    console.log('User ID from localStorage:', storedLastName);
  
    if (storedUserId) {
      setUserId(Number(storedUserId));  // Konverto në numër nëse `userId` është numerik
    }

    if(storedFirstName){
        setFirstName(storedFirstName)
    }

    if(storedLastName){
        setLastName(storedLastName)
    }
  }, []);
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Strukturo objektin për kërkesën POST
    const reservationData = {
        name: firstName,  // Përdor firstName në vend të name
        surname: lastName,  // Përdor lastName në vend të surname
        reservationDate: reservationDate,
        totalPrice: totalPrice,
        userID: Number(userId),
        eventID: eventID
      };

    // Shfaq të dhënat e rezervimit në console
    console.log('Reservation data:', reservationData);

    // Bëj kërkesën POST për rezervim
    try {
      const response = await fetch('https://localhost:7214/api/Reservation/AddReservation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reservationData),
      });

      if (response.ok) {
        alert('Rezervimi u krijua me sukses!');
      } else {
        alert('Ka ndodhur një gabim gjatë krijimit të rezervimit.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Ka ndodhur një gabim.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Emri</label>
        <input
          type="text"
          value={firstName || ""}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Mbiemri</label>
        <input
          type="text"
          value={lastName || ""}
          onChange={(e) => setSurname(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Data e Rezervimit</label>
        <input
          type="date"
          value={reservationDate}
          onChange={(e) => setReservationDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Çmimi Total</label>
        <input
          type="number"
          value={totalPrice}
          onChange={(e) => setTotalPrice(e.target.value)}
          required
        />
      </div>
      <div>
        <label>User ID</label>
        <input
          type="number"
          value={userId || ""} // Sigurohu që po shfaq vlerën dhe të mos jetë undefined
          onChange={(e) => setUserId(e.target.value)}
          required
          readOnly
        />
      </div>
      <div>
        <label>Event ID</label>
        <input
          type="number"
          value={eventID}
          onChange={(e) => setEventID(e.target.value)}
          required
        />
      </div>
      <button type="submit">Krijo Rezervimin</button>
    </form>
  );
}
