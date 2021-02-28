import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:foxtrot/application/dashboard/dashboard_bloc.dart';
import 'package:foxtrot/injection.dart';

import 'article_card.dart';

class Dashboard extends StatelessWidget {
  Dashboard({
    @required this.user,
    Key key,
  }) : super(key: key);
  final UserCredential user;

  @override
  Widget build(BuildContext context) {
    return BlocProvider(
      create: (context) =>
          getIt<DashboardBloc>()..add(DashboardEvent.initialEvent()),
      child: BlocBuilder<DashboardBloc, DashboardState>(
        builder: (context, state) {
          if (state.articles.isNone()) {
            return Center(child: CircularProgressIndicator());
          }
          return Scaffold(
            body: SafeArea(
              child: Padding(
                padding: const EdgeInsets.all(8.0),
                child: ListView(
                    children: state.articles.fold(
                  () => [],
                  (a) => a.map((e) => ArticleCard(article: e)).toList(),
                )),
              ),
            ),
            floatingActionButton: FloatingActionButton(
              onPressed: () => print("Navigate to New Document page"),
            ),
          );
        },
      ),
    );
  }
}
