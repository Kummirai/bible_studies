"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const DashboardPage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      // In a real app, you'd fetch user data from an API route
      // that verifies the session/token.
      // For now, we'll just simulate it.
      const token = document.cookie.split('; ').find(row => row.startsWith('token='));
      if (!token) {
        router.push('/auth/login');
        return;
      }
      // You can decode the token to get user info if needed
      // For now, we'll just assume the user is logged in.
      setUser({ username: 'Student' }); // Placeholder
      setLoading(false);
    };

    fetchUser();
  }, [router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Welcome to your Dashboard, {user?.username}!</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">My Courses</h2>
          {/* Placeholder for enrolled courses */}
          <div className="bg-white p-4 rounded-lg shadow">
            <p>You are not enrolled in any courses yet.</p>
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
