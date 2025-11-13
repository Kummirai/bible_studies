"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const DashboardPage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await fetch('/api/user/data');
        if (res.ok) {
          const userData = await res.json();
          setUser(userData);
        } else {
          router.push('/auth/login');
        }
      } catch (error) {
        console.error('Failed to fetch user data', error);
        router.push('/auth/login');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [router]);

  const handleLogout = async () => {
    await fetch('/api/auth/logout');
    router.push('/auth/login');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Welcome, {user?.username}!</h1>
        <button
          onClick={handleLogout}
          className="bg-slate-900 text-white px-4 py-2 rounded-md hover:bg-slate-800"
        >
          Logout
        </button>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">My Courses</h2>
          <div className="bg-white p-4 rounded-lg shadow">
            {user?.enrolledCourses?.length > 0 ? (
              <ul>
                {user.enrolledCourses.map((enrollment) => (
                  <li key={enrollment.courseId} className="mb-4">
                    <h3 className="font-bold">{enrollment.courseDetails?.title}</h3>
                    <p>Progress: {enrollment.progress}%</p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: `${enrollment.progress}%` }}
                      ></div>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p>You are not enrolled in any courses yet. <Link href="/" className="text-blue-600 hover:underline">Enroll in a course</Link></p>
            )}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Suggested Courses</h2>
          {/* Placeholder for suggested courses */}
          <div className="bg-white p-4 rounded-lg shadow">
            <p>No course suggestions at the moment.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
