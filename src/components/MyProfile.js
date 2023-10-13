import { useSelector } from 'react-redux';
import styles from '../styles/Myprofile.module.css';

function MyProfile() {
  const { missions } = useSelector((state) => state.missions);

  return (
    <div className={styles.container}>
      <div className={styles.board}>
        <h2 className={styles.title}>My Missions</h2>
        <ul className={styles.list}>
          {missions.filter((mission) => mission.reserved === true).map((mission) => (
            <li className={styles.Containerli} key={mission.mission_id}>
              <p className={styles.itemsTitle}>{mission.mission_name}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* here your code */}

    </div>
  );
}

export default MyProfile;
