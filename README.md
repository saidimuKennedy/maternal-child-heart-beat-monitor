# Maternal-Child Heartbeat Monitor

An IoT-driven system for **monitoring and visualizing maternal and fetal heart rates** during pregnancy — combining biomedical data collection with a responsive web interface for clinicians and mothers.

---

### Status
Final Year Project — Completed

---

### Why
Timely monitoring of maternal and fetal vitals is critical in preventing complications during pregnancy.  
This project provides a **real-time monitoring and alert system** that bridges the gap between patient data and healthcare providers, especially in low-resource settings.

---

### Tech stack
- **Languages / Frameworks:**  
  - Backend: Python (Flask)  
  - Frontend: React + Vite  
  - Database: MongoDB (NoSQL)  
- **Key Libraries & Tools:**  
  Flask-RESTful, PySerial, React Hooks, Chart.js, Axios  
- **Hardware Integration:**  
  Pulse sensors via Arduino (for heart rate acquisition)

---

### Quick start (development)
#### Prerequisites
- Python 3.11+  
- Node.js 18+  
- MongoDB instance (local or cloud)  

#### Install
```bash
# Backend
pip install -r requirements.txt

# Frontend
cd client
npm install
```

#### Run
```bash
# Start backend
flask run

# Start frontend
cd client
npm run dev
```

#### Run tests
```bash
pytest
```

---

### Minimal usage
1. Connect the heartbeat sensors to Arduino and ensure serial communication is active.  
2. Start the backend and frontend.  
3. Access the dashboard at `http://localhost:5173` to view **real-time heart rate graphs** for both mother and child.

---

### Project layout
- `/server` — Flask API endpoints  
- `/client` — React + Vite frontend  
- `/sensors` — Arduino scripts for data acquisition  
- `/tests` — unit/integration tests  
- `README.md` — this file  

---

### Roadmap / TODO
- [ ] Add AI anomaly detection for heart rate patterns  
- [ ] Improve mobile responsiveness for remote monitoring  
- [ ] Integrate cloud storage for historical data  
- [ ] Add clinician portal for patient tracking  

---

### Contributing
- Fork and open a branch (`feat/your-feature-name`)  
- Write clear, modular code and include tests  
- Submit a PR with a concise message  

---

### Author & Contact
- **Kennedy Saidimu** — Biomedical Engineer & Full-Stack Developer  
  - GitHub: [@saidimuKennedy](https://github.com/saidimuKennedy)  
  - Email: waruirukennedy2@gmail.com  

---

### License
- MIT

