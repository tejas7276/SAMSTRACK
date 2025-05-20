package com.tka.sams.api.dao;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.criterion.Restrictions;
import org.hibernate.criterion.SimpleExpression;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.tka.sams.api.entity.AttendanceRecord;

@Repository
public class AttendanceRecordDao {
	@Autowired
	private SessionFactory factory;

	public List<AttendanceRecord> getAllAttendanceRecords() {
	    Session session = null;
	    List<AttendanceRecord> list = null;
	    try {
	        session = factory.openSession();
	        Criteria criteria = session.createCriteria(AttendanceRecord.class);

	        criteria.setResultTransformer(Criteria.DISTINCT_ROOT_ENTITY);

	        list = criteria.list();
	    } catch (Exception e) {
	        e.printStackTrace();
	    } finally {
	        if (session != null) {
	            session.close();
	        }
	    }
	    return list;
	}

	
	public List<AttendanceRecord> getAttendanceByFacultySubjectDate(String faculty, long subjectId, String date) {
	    Session session = null;
	    List<AttendanceRecord> list = null;
	    try {
	        session = factory.openSession();
	        Criteria criteria = session.createCriteria(AttendanceRecord.class);
	        
	        // Add filters
	        criteria.createAlias("user", "u"); // Faculty (User)
	        criteria.createAlias("subject", "s"); // Subject

	        criteria.add(Restrictions.eq("u.username", faculty));
	        criteria.add(Restrictions.eq("s.id", subjectId));
	        criteria.add(Restrictions.eq("date", date));

	        // Remove duplicates
	        criteria.setResultTransformer(Criteria.DISTINCT_ROOT_ENTITY);

	        list = criteria.list();
	    } catch (Exception e) {
	        e.printStackTrace();
	    } finally {
	        if (session != null) {
	        session.close();
	    }
	    }
	    return list;
	}

	
	
	public List<AttendanceRecord> getAttendanceByFaculty(String facultyUsername) {
        Session session = factory.openSession();
        List<AttendanceRecord> list = null;
        try {
            Criteria criteria = session.createCriteria(AttendanceRecord.class);
            criteria.createAlias("user", "u");
            criteria.add(Restrictions.eq("u.username", facultyUsername));
            list = criteria.list();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            session.close();
        }
        return list;
    }

	public List<AttendanceRecord> getAllAttendanceRecords(String date, long subjectId) {
		Session session = null;
		List<AttendanceRecord> list = null;
		try {
			session = factory.openSession();

			Criteria criteria = session.createCriteria(AttendanceRecord.class);
			SimpleExpression dateEq = Restrictions.eq("date", date);
			SimpleExpression subjectEq = Restrictions.eq("subject.id", subjectId);

			criteria.add(Restrictions.and(dateEq, subjectEq));

			list = criteria.list();
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			session.close();
		}
		return list;
	}

	public AttendanceRecord saveAttendance(AttendanceRecord attendanceRecord) {
		Session session = null;
		AttendanceRecord record = null;
		try {
			session = factory.openSession();
			Transaction transaction = session.beginTransaction();
			session.save(attendanceRecord);
			transaction.commit();
			record = attendanceRecord;
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			session.close();
		}
		return record;
	}
}
