# Server Base - Proyecto ONG

## Envinroment setup

1. Create database
2. Copy .env.example to .env and fill with database credentials.

To install dependencies, run

```bash
npm install
```

3. Migrations:

```bash
npx sequelize-cli db:migrate
```

4. Seeders:

```bash
npx sequelize-cli db:seed:all
```

## Start local server

```bash
npm start
```

### Test Users Data

| firstName   | lastName      | email                       | image                                                                                                                                                                   | password      | roleId | createdAt                | updatedAt                | deletedAt                |
| ----------- | ------------- | --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ------ | ------------------------ | ------------------------ | ------------------------ |
| Admin       | Admin         | admin@somos-mas.org         | https://images.unsplash.com/photo-1582213782179-e0d53f982ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80            | adminpassword | 1      | 2022-09-11T20:50:45.469Z | 2022-09-11T20:50:45.469Z |                          |
| Maria       | Lopez Guevara | marilopez@cbc.ca            | https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60 | iODi6Xw14O7   | 2      | 2022-09-11T20:50:45.469Z | 2022-09-11T20:50:45.469Z |                          |
| Netty       | Pastrana      | npastra@unicef.org          | https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60 | rO9iiD7LPk    | 2      | 2022-09-11T20:50:45.469Z | 2022-09-11T20:50:45.469Z |                          |
| Abie        | Marzele       | amarzele2@amazon.com        | https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60 | 4dVaGS        | 2      | 2022-09-11T20:50:45.469Z | 2022-09-11T20:50:45.469Z |                          |
| Sari        | Wellington    | smursell3@springer.com      | https://images.unsplash.com/photo-1542343633-ce3256f2183e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60    | CQ0mxW        | 2      | 2022-09-11T20:50:45.469Z | 2022-09-11T20:50:45.469Z |                          |
| Nevil       | Wichard       | nwichard4@upenn.edu         | https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60 | 3AtCkR692V    | 2      | 2022-09-11T20:50:45.469Z | 2022-09-11T20:50:45.469Z |                          |
| James       | Stirgess      | jstirgess5@imageshack.us    | https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60 | maFb0TYR496v  | 2      | 2022-09-11T20:50:45.469Z | 2022-09-11T20:50:45.469Z |                          |
| Kare        | Try           | ktry6@opensource.org        | https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60 | yB9m2Kp       | 2      | 2022-09-11T20:50:45.469Z | 2022-09-11T20:50:45.469Z |                          |
| Una         | Chisnell      | uchisnell7@java.com         | https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzV8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60 | xPDlLG        | 2      | 2022-09-11T20:50:45.469Z | 2022-09-11T20:50:45.469Z |                          |
| Jasmine     | Turvey        | jturvey8@kickstarter.com    | https://images.unsplash.com/photo-1495366691023-cc4eadcc2d7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzd8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60 | HEBEOSW1      | 2      | 2022-09-11T20:50:45.469Z | 2022-09-11T20:50:45.469Z |                          |
| Brigg       | Fallow        | bfallow9@nsw.gov.au         | https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzh8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60 | OfPFstNulg    | 2      | 2022-09-11T20:50:45.469Z | 2022-09-11T20:50:45.469Z |                          |
| Cacilie     | Sparkwill     | csparkwilla@psu.edu         | https://images.unsplash.com/photo-1531123414780-f74242c2b052?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60 | pRHZswex      | 2      | 2022-09-11T20:50:45.469Z | 2022-09-11T20:50:45.469Z |                          |
| Alisha      | Wintour       | awintourb@whitehouse.gov    | https://images.unsplash.com/photo-1563620915-8478239e9aab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODF8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60    | 9VVE0iYg      | 2      | 2022-09-11T20:50:45.469Z | 2022-09-11T20:50:45.469Z |                          |
| Orelie      | Livings       | olivingsc@berkeley.edu      | https://images.unsplash.com/photo-1618835962148-cf177563c6c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODJ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60 | KX8BJQ        | 2      | 2022-09-11T20:50:45.469Z | 2022-09-11T20:50:45.469Z |                          |
| Jolie       | Swiggs        | jswiggsd@shutterfly.com     | https://images.unsplash.com/photo-1539698103494-a76dd0436fbc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60 | vNefYS        | 2      | 2022-09-11T20:50:45.469Z | 2022-09-11T20:50:45.469Z |                          |
| Geneva      | Spriggs       | gspriggse@infoseek.co.jp    | https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODV8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60 | Hipc8NpERKlr  | 2      | 2022-09-11T20:50:45.469Z | 2022-09-11T20:50:45.469Z |                          |
| Sebastian   | Serot         | sserotf@tripadvisor.com     | https://images.unsplash.com/photo-1504899567410-7501a313cadd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODZ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60 | BiUbzuTMoM    | 2      | 2022-09-11T20:50:45.469Z | 2022-09-11T20:50:45.469Z | 12/11/2,21               |
| Juan Manuel | Shotboult     | kshotboultg@goodreads.com   | https://images.unsplash.com/photo-1543357480-c60d40007a3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODh8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60    | KmOVgghki     | 2      | 2022-09-11T20:50:45.469Z | 2022-09-11T20:50:45.469Z | 2022-09-11T20:50:45.469Z |
| Alan        | MacAfee       | pmacafeeh@ucsd.edu          | https://images.unsplash.com/photo-1603383928972-2116518cd3f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTF8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60 | I12ajAY       | 2      | 2022-09-11T20:50:45.470Z | 2022-09-11T20:50:45.470Z | 2022-09-11T20:50:45.469Z |
| Federico    | Tuberfield    | jtuberfieldi@bloglovin.com  | https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTJ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60 | ia1EtShVG7CU  | 2      | 2022-09-11T20:50:45.470Z | 2022-09-11T20:50:45.470Z | 2022-09-11T20:50:45.470Z |
| Ariel       | Burwin        | aburwinj@virginia.edu       | https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTR8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60    | Fp0cGs6ZwV    | 2      | 2022-09-11T20:50:45.470Z | 2022-09-11T20:50:45.470Z | 2022-09-11T20:50:45.470Z |
| Alejo       | Lunbech       | alunbechl@blogtalkradio.com | https://images.unsplash.com/photo-1600878459138-e1123b37cb30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAwfHxwZXJzb258ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60   | EvSrIilM      | 2      | 2022-09-11T20:50:45.470Z | 2022-09-11T20:50:45.470Z | 2022-09-11T20:50:45.470Z |
