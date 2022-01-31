SELECT 
    job_id, SUM(salary)
FROM
    hr.employees
GROUP BY job_id
HAVING job_id = 'IT_PROG';